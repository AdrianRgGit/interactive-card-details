import { useState } from "react";

const Form = () => {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDateMonth, setExpDateMonth] = useState("");
  const [expDateYear, setExpDateYear] = useState("");
  const [cvc, setCvc] = useState("");

  const handleInputChange = (event: any) => {
    switch (event.target.id) {
      case "cardholder":
        setCardHolder(event.target.value);
        break;
      case "card-number":
        setCardNumber(event.target.value);
        break;
      case "exp-date-month":
        setExpDateMonth(event.target.value);
        break;
      case "exp-date-year":
        setExpDateYear(event.target.value);
        break;
      case "cvc":
        setCvc(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log({ cardHolder, cardNumber, expDateMonth, expDateYear, cvc });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-6 gap-y-4 text-lg">
      <div className="flex flex-col">
        <label className="text-gray-3 mb-2">CARDHOLDER NAME</label>
        <input
          id="cardholder"
          className="flex-grow border p-4 rounded-lg border-gray-1"
          type="text"
          placeholder="e.g Jane Appleseed"
          value={cardHolder}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-3 mb-2">CARD NUMBER</label>
        <input
          id="card-number"
          className="flex-grow border p-4 rounded-lg border-gray-1"
          type="number"
          placeholder="e.g. 1234 5678 9123 0000"
          value={cardNumber}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-row gap-x-2 mb-4">
        <div className="flex flex-col w-1/2">
          <label className="mb-2">EXP.DATE (MM/YY)</label>
          <div className="flex flex-row gap-x-2">
            <input
              id="exp-date-month"
              className="w-1/2 border p-4 rounded-lg border-gray-1"
              type="number"
              placeholder="MM"
              value={expDateMonth}
              onChange={handleInputChange}
            />
            <input
              id="exp-date-year"
              className="w-1/2 border p-4 rounded-lg border-gray-1"
              type="number"
              placeholder="YY"
              value={expDateYear}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          <label className="mb-2">CVC</label>
          <input
            id="cvc"
            className="border p-4 rounded-lg border-gray-1"
            type="number"
            placeholder="e.g. 123"
            value={cvc}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <button className="bg-gray-3 p-4 rounded-lg text-white-1" type="submit">
        Confirm
      </button>
    </form>
  );
};

export default Form;
