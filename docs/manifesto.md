<center>
	<h1>
		The Luna Manifesto
	</h1>
	<p>
		Lua is a Language, Not a Spare Part
	</p>
</center>


## Motivations
**We love Lua, but the ecosystem is broken.**
Lua is an engineering masterpiece—fast, elegant, and lightweight. Yet, it has been condemned to live in the shadows. While JavaScript exploded with Node/Bun and Python conquered the world, Lua remained the "eternal guest": a scripting tool for others, but rarely a platform for itself.

### The Failure of the Status Quo
Let’s be honest: the current state of Lua development is a minefield. **LuaRocks**, the de facto standard, is a fragile system that collapses at the slightest OS inconsistency. Trying to install a "rock" with C dependencies is a gamble the developer usually loses.

We are facing a crisis of:
* **Ghost Packages:** A graveyard of outdated libraries, unmaintained since 2015, that shatter upon contact with modern environments.
* **The "Dependency Hell":** If your C compiler isn't perfectly tuned to your OS path, LuaRocks surrenders. There is no true portability.
* **The Silent Era:** Documentation in the Lua ecosystem is, at best, a cryptic code comment and, at worst, non-existent.

**Lua cannot reach its potential if the first step to using it is a fight with the operating system.**

---

## The Luna Promise

### 1. Documentation as a Sovereign Citizen
In the current ecosystem, guessing how a library works is a "rite of passage." In Luna, this ends. The **Integrated Documenter** is not a plugin; it is a core pillar. We are enforcing a standard of clarity where documentation is generated, verified, and accessible directly from the CLI.

### 2. The End of "Build Failed": Zig & C Integration
Luna does not care about your system’s broken build tools. By integrating the **Zig toolchain**, Luna takes total control. Zig allows us to compile native C dependencies with surgical precision, providing the "plug-and-play" experience LuaRocks never could.

### 3. Static Cross-Compilation: One Binary to Rule Them All
The success of Go and Rust isn't just the syntax; it’s the distribution. Luna brings this power to Lua.
* **Zero Dependencies:** Generate static binaries that run anywhere without needing Lua or Luna installed on the target machine.
* **From One to Many:** Whether you develop on a minimal Alpine setup or a powerful workstation, your code will behave identically across architectures.

### 4. A Modern, "Pay-as-you-go" Standard Library
The original Lua philosophy of "no batteries included" was meant to keep the language small, but it forced developers to reinvent the wheel every time. Luna changes this with a comprehensive Standard Library that is **batteryless by default, but ready on demand.**

* **Tree-Shaking & Dead Code Elimination:** Unlike traditional runtimes, Luna's build system is aware of what you actually use. If your project doesn't touch the HTTP module, that code is never compiled into your static binary. You get the power of a massive library with the footprint of a minimalist one.
* **C-Native Modules:** Key components (JSON, Cryptography, I/O) are implemented as optimized C modules compiled via Zig. You get high-level Lua syntax with the raw, uncompromising performance of a systems language.
* **Consistency over Chaos:** Luna ends the "paralysis of choice." Instead of searching for the least-broken library on an abandoned repo, you get one unified, documented, and high-performance way to handle modern tasks.

---

## Our Plan

### Sovereignty over Fragility
We aren't just building another package manager that breaks. We are building a **Batteries-Included Runtime**. Luna includes its own module and build system that ignores the inconsistencies of the underlying OS. 

### Minimalist Power
We admire Lua’s speed, and we will not sacrifice it. Luna is crafted in **Go** for orchestration and uses **Zig** for native performance. It is a modern, sterile environment—no junk dependencies, no global configurations that break other projects.

### A Long-Term Vision
Luna is not a corporate product; it is a mission to rescue Lua from being "just a spare part." Because great things take time to be built right, and because this project is fueled by the conviction of a single vision, the road ahead is clear but demanding.

---

> **A Note from the Frontlines**
> Currently, Luna is the work of a **single developer still navigating the halls of school**. This is a labor of passion, technical rigor, and a refusal to accept the status quo. Because quality and school take time, the **first Beta Release** is projected for **early-to-mid 2027**.

**Are you tired of `luarocks install` being a coin toss?**
The future is being built. Join us on [GitHub](https://github.com/luna-box/luna). Let’s give Lua the home it deserves.
