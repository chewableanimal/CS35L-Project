import { useState } from "react";
import Balance from "../../home/balance";

export default function Trade({ coin, type, rank }) {
  const { authUser } = useAuth();
  const [count, setCount] = useState(0);

  //Buy
  const currentCashValue = authUser.balance;
  const amountToBuy = (count * coin?.quotes?.USD.price).toFixed(2);
  const afterBuyValue = currentCashValue - amountToBuy;
  const onClickBuy = () => {
    // if(afterValue < 0) alert! you can't buy!
    // pageState.balance = afterValue;
    //setCount(0)
  };

  //Sell
  const currentCoinValue = authUser.wallet[rank];
  const amountToSell = count;
  const afterSellValue = (
    currentCashValue +
    count * coin.quotes?.USD.price
  ).toFixed(2);
  const onClickSell = () => {
    // if(count > currentCoinValue) alert! Can't sell more than you have
    // pageState.balance = afterValue;
    // setCount(0)
  };
  return (
    <>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Buy</Tab>
          <Tab>Sell</Tab>
          <Tab>Send</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <div>
        {type == "buy" ? (
          <div>
            <div>You have {currentCashValue} cash</div>
            <div>Amount to Buy: {amountToBuy}</div>
            <div>Cash Value After You Buy: {afterBuyValue}</div>
          </div>
        ) : (
          <div>
            <div>
              You have {currentCoinValue} coins of {authUser.coin.id}
            </div>
            <div>Amount to Sell: {amountToSell}</div>
            <div>Cash Value After You Sell: {afterSellValue}</div>
          </div>
        )}

        <div>
          <button
            onClick={() => {
              setCount(count - 1); // Corrected the decrement syntax
            }}
          >
            -
          </button>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10))}
          />{" "}
          <button
            onClick={() => {
              setCount(count + 1); // Corrected the increment syntax
            }}
          >
            +
          </button>
          {type == "buy" ? (
            <button onClick={onClickBuy}>Buy</button>
          ) : (
            <button onClick={onClickSell}>Sell</button>
          )}
        </div>
      </div>
    </>
  );
}
