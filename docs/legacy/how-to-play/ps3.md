---
sidebar_position: 3
---

# PlayStation 3

## Prerequisites

1. **Supported Just Dance Game**  
   Make sure your game is compatible with DanceParty. [See supported games here.](../games.md)

2. **Homebrewed PS3**
   - Emulators won't work.
   - Your console must be able to go online and have be on the latest version.
   - You need to use PSN for this so make sure your account is logged-in and not banned.

3. **DanceParty Patcher**  
   - Download it here: [DanceParty Patcher](https://github.com/dancepartyteam/patcher)

---

## Update your game

Make sure that you've updated your game and you're on the latest version of it. Otherwise the patching process won't work.

## Patching the Game

### 1. Obtain `EBOOT.bin`

1. On your PS3, navigate to: `/dev_hdd0/`
2. Locate your game's folder, usually inside `app/` or `game/`.  
3. Copy the **EBOOT.BIN** file to your PC.

### 2. Patch the `EBOOT.bin`

- Run the DanceParty patcher and provide the `EBOOT.bin` file:  
1. Drag and drop the file onto `patcher.exe`  
2. Or use the CLI:  
  ```bash
  patcher.exe path/to/EBOOT.bin
  ```  

- The patcher will generate a patched `EBOOT.bin` file ready to be used on your PS3.

### 3. Replace the Original EBOOT

1. Copy the patched `EBOOT.bin` back to the original location on your PS3: `/dev_hdd0/your_game_folder/`
2. Overwrite the original file.  

- Your game is now patched and ready to connect to the servers.

---

## Notes & Troubleshooting

- Ensure your PS3 is connected to the internet.  
- Make sure the game is **fully updated** before patching.  
- If your game doesn’t connect to the servers:  
- Check your PS3 network settings.  
- Make sure the patched `EBOOT.bin` is in the correct folder.  
- For further assistance, [join our Discord](https://dp.ryuatelier.org/discord).

