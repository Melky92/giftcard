import axios from 'axios';
import Config from '../config.json';

export default async() => {
  let amount = "- ";
  switch(Config.AmountSource.selected){
    case "local":
      amount = Config.AmountSource.local.amount;
      break;

    case "remote":
      try{
        amount = (await axios.get(Config.AmountSource.remote.URL)).data.result;
      }catch(error){
        amount = "-";
      }
      break;

    default:
      return "Error";
  }
  return `${amount} ${Config.AmountSource.currency}`;
}