# Getting Started

Welcome to the  **Dynamic-Pricing-Bot** ! This guide walks you through cloning the repo, running the snippet in Python and Node.js, importing the n8n workflow, and setting up the Make.com scenario.

---

## Prerequisites

Before you begin, ensure you have:

* **Git** installed (for cloning).
* **Python 3.8+** with `pip` (for the Python variant).
* **Node.js 14+** and `npm` (for the Node.js variant).
* An **n8n** instance (self‑hosted or [n8n.cloud](https://n8n.io/)).
* A **Make.com** account for the scenario import.

---

## 1. Clone the Repository

```bash
git clone https://github.com/8om8work/dynamic-pricing-bot.git
cd dynamic-pricing-bot
```

---

## 2. Python Variant

1. Change into the Python folder:
   ```bash
   cd python
   ```
2. Install the HTTP library:
   ```bash
   pip install requests
   ```
3. Run the bot:
   ```bash
   python dynamic_pricing_bot.py
   ```

*Tip:* To schedule hourly, add a cron entry:

```cron
0 * * * * cd /path/to/python && /usr/bin/python dynamic_pricing_bot.py >> bot.log 2>&1
```

---

## 3. Node.js Variant

1. Change into the Node.js folder:
   ```bash
   cd nodejs
   ```
2. Install dependencies:
   ```bash
   npm install node-fetch@2
   ```
3. Run the bot:
   ```bash
   node index.js
   ```

*Tip:* Use a process manager like [PM2](https://pm2.keymetrics.io/) for production scheduling.

---

## 4. n8n Workflow

1. Open your n8n editor.
2. Click **Import** →  **Paste Workflow** .
3. Open `n8n/workflow.json`, copy its content, and paste.
4. Set credentials for each HTTP Request node (if needed).
5. Activate the workflow and set a schedule (e.g., every hour).

---

## 5. Make.com Scenario

1. Log in to Make.com.
2. Create a new  **Scenario** .
3. Click the **JSON** icon to import.
4. Open `make/scenario.json`, copy the JSON, and paste.
5. Connect your API modules’ credentials.
6. Activate and schedule (e.g., hourly).

---

## 6. Customization

* **API Endpoints:** Update URLs in each script or module to match your storefront and data providers.
* **Product IDs:** Replace `123` with your actual product SKU.
* **Pricing Logic:** Tweak multipliers (e.g., `index * 1.02`) in `Calculate Price` functions.
* **Environment Variables:** Consider moving credentials and endpoints into `.env` files for security.

---

## 7. Monitoring & Logging

* **Python/Node.js:** Redirect STDOUT to log files; implement retries on failures.
* **n8n:** Enable execution logs and set up Slack or email alerts on errors.
* **Make.com:** Check scenario run history and set up notifications for errors.

---

## 8. Contributing

Found a bug or want a new feature? Please:

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "feat: description"`).
4. Push to your branch (`git push origin feature-name`).
5. Open a Pull Request.

---

## License

This project is MIT‑licensed. See the [LICENSE](https://chatgpt.com/g/g-p-682f23c0eae0819186abae82ebd994ae-neuralnomics-substack/LICENSE) file for details.

Happy automating! 🚀
