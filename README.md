
# SideInstaller (Khmer Localization Fork)

> **🇰🇭 This fork is specifically maintained to add full Khmer (Cambodian) language support to SideInstaller.**  
> The user interface, alerts, and onboarding text have been translated to make sideloading accessible for Khmer‑speaking iPhone and iPad users.  
> *This fork does not change the core functionality – it only adds Khmer localization.*

---

## Install it [here](https://frizzlem.github.io/SideInstaller/)

<img width="589" height="1209" alt="Screenshot iPhone 17 Pro 16-07-2026 at 2 16 49 PM" src="https://github.com/user-attachments/assets/cb46bb76-6aff-4197-b4b7-addc0c5dca40" />


SideStore and LiveContainer are currently the best way to sideload on iOS. However, there's one big problem: installing them requires a PC, which many people don't have. That's why I made SideInstaller, a free and open-source iOS app that installs them directly on your iPhone, no PC required.

SideInstaller handles the entire setup process on-device. It takes care of the pairing, provisioning, and installation steps that normally force you to plug into a computer and run desktop tools, all from a single app running on the phone itself. Once it's done, you get a fully working SideStore and LiveContainer setup ready to sideload your own apps.

The whole thing is built to be simple. There's no complicated configuration, no command line, and no need to understand how any of the underlying machinery works. You just open the app, follow a few steps, and let it do the rest. For anyone who's ever wanted to sideload but didn't own a Mac or PC, this removes the biggest barrier to getting started.

And because it's open source, you don't have to take my word for any of it. The full code is available for anyone to read, audit, or contribute to, so you can see exactly what's running on your device.

---

## Requirements

- A Wi‑Fi router or a hotspot connection
- An iPhone/iPad on iOS 27

---

## How to use it

1. Install LocalDevVPN and connect to the VPN.
2. Open [this page](https://frizzlem.github.io/SideInstaller/) and try installing it using any of the certificates.
3. Once you've installed it, open the app.
4. Log in with your Apple account credentials.
5. Click "Install Sidestore" or "Install Sidestore + Livecontainer".
6. SideStore (or SS + LiveContainer) will install, depending on which one you chose.
7. That's it – no PC or extra steps required.

---

## Is SideInstaller Safe?

SideInstaller is built with safety and privacy in mind. The app is fully local and open source, which means anyone can inspect exactly what it does. Your Apple credentials also never leave your device – they're used locally, only to sign and install your apps, and are never transmitted, logged, or collected in any way. There's no server collecting your data, no analytics tracking what you do, and no account to sign up for. Everything happens on your iPhone, and you can verify every line of it yourself in the source code.

---

## About This Fork

This repository is a fork of the original [SideInstaller by FrizzleM](https://github.com/FrizzleM/SideInstaller).  
**The sole purpose of this fork is to add Khmer language support** – all core code, licensing, and credits remain with the original author.  
If you speak Khmer and want to use SideInstaller in your native language, this is the version for you.
