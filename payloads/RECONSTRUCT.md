# Reconstruct ELF binary

The `elfldr-ps5-1360.elf` is large (397 KB). It has been split into base64 parts.

## To reconstruct:

```bash
# Concatenate all parts in order
cat elf_part_*.b64 | base64 -d > elfldr-ps5-1360.elf

# Or if parts are named elf_part_00.b64, elf_part_01.b64, etc.
for i in $(seq -w 0 66); do
  cat elf_part_${i}.b64
done | base64 -d > elfldr-ps5-1360.elf
```

## Alternative
Use the original `Relapse-Exploit-main.zip` and extract the `payloads/` folder.

The parts are the original binary from the zip. No malware was added.
