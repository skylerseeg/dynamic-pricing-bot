import requests

# 1) Fetch market index and competitor price
index = requests.get("https://api.rawmaterials.com/price").json()["value"]
comp  = requests.get("https://api.competitor.com/feed").json()["median"]

# 2) Compute & push your new price (floor=1.02×index, cap=0.98×competitor)
new_price = min(max(index*1.02, comp*0.98), comp*1.05)
requests.post(
    "https://api.yourstore.com/products/123/price",
    json={"price": round(new_price,2)}
)
