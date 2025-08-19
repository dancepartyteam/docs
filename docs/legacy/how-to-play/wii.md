---
sidebar_position: 1
---

# Wii

## Prerequisites

1. **Supported Just Dance Game**  
   Make sure your game is compatible with DanceParty. [See supported games here.](../games.md)  

2. **Homebrewed Wii or Dolphin Emulator**
   - If using Dolphin, you must import your Wii's NAND to play.  
   - Certain features may not work on the emulator.  

3. **DanceParty Patcher**  
   Download it here: [DanceParty Patcher](https://github.com/dancepartyteam/patcher)

---

:::danger[Disclaimer: Important Notice]

DanceParty and RyuAtelier is not responsible for anything that might occur to your console. Please continue with the risk in mind.

:::

---

## Patching the DOL File

### 1. Extract the Game

1. Obtain a legal copy of your game and import it into Dolphin Emulator.  
2. Right-click the game → **Properties**.  
3. Right-click the root **Disc** → **Extract entire disc**.  
4. Choose a folder to export the game to.  
5. Once exporting is complete, locate the `main.dol` file inside `DATA\sys`.

### 2. Patch the `main.dol`

- Run the patcher and provide the `main.dol` file:  
  1. Drag and drop the DOL file onto `patcher.exe`  
  2. Or use the CLI:  
     ```bash
     patcher.exe path/to/your/main.dol
     ```  
- After patching, you can either:  
  - Run the game directly in Dolphin Emulator, or  
  - Pack it back into an ISO file for Wii.

---

## Patching an ISO

1. Obtain the patcher and your ISO file.  
2. Patch the ISO:  
   - Drag & drop the ISO onto `patcher.exe`  
   - Or use the CLI:  
     ```bash
     patcher.exe path/to/your/game.iso
     ```  
3. Flash the patched ISO onto your Wii.

---

## Patching a WBFS

- WBFS/NKIT/NKIT.GCZ files are **not supported**.  
- Convert them to ISO and use the patcher.

---

## Bugs & Issues

**Q:** My game doesn't connect to the servers.  
**A:**  
- Make sure your Wii is connected to the internet.  
- Confirm Wi-Fi settings are correct and you agreed to the Wii Internet Agreement.  
- Enable WiiConnect24 and other online features.  
- If the issue persists, [join our Discord](https://dp.ryuatelier.org/discord) for help.
