FROM python:3.12-slim AS builder

WORKDIR /app

RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

FROM python:3.12-slim

COPY --from=builder /opt/venv /opt/venv
COPY --from=builder /app /app

WORKDIR /app
ENV PATH="/opt/venv/bin:$PATH"

EXPOSE 8080

CMD ["python", "serve.py"]
