# Payloads

This folder contains the binary payloads for the Relapse PS5 tool.

## Files
- `kexp_2026_05_25.bin` - Kernel exploit payload (18912 bytes)
- `elfldr-ps5-1360.elf` - ELF loader (397024 bytes)

## Note
The original binaries from the zip are too large to embed fully via the GitHub API in a single step.

To get the original binaries:
1. Use the original `Relapse-Exploit-main.zip` you provided.
2. Extract the `payloads/` folder.
3. Or decode any `.b64` files if present:
   ```bash
   base64 -d kexp_2026_05_25.bin.b64 > kexp_2026_05_25.bin
   ```

These are the standard payloads from the original project. No additional malware was detected in the analysis.
