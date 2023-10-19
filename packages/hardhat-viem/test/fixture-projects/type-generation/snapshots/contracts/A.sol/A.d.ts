// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface A$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "A",
  "sourceName": "contracts/A.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "getA",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405161076938038061076983398181016040528101906100329190610293565b826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600190816100819190610519565b505050506105eb565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100c98261009e565b9050919050565b6100d9816100be565b81146100e457600080fd5b50565b6000815190506100f6816100d0565b92915050565b6000819050919050565b61010f816100fc565b811461011a57600080fd5b50565b60008151905061012c81610106565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6101858261013c565b810181811067ffffffffffffffff821117156101a4576101a361014d565b5b80604052505050565b60006101b761008a565b90506101c3828261017c565b919050565b600067ffffffffffffffff8211156101e3576101e261014d565b5b6101ec8261013c565b9050602081019050919050565b60005b838110156102175780820151818401526020810190506101fc565b60008484015250505050565b6000610236610231846101c8565b6101ad565b90508281526020810184848401111561025257610251610137565b5b61025d8482856101f9565b509392505050565b600082601f83011261027a57610279610132565b5b815161028a848260208601610223565b91505092915050565b6000806000606084860312156102ac576102ab610094565b5b60006102ba868287016100e7565b93505060206102cb8682870161011d565b925050604084015167ffffffffffffffff8111156102ec576102eb610099565b5b6102f886828701610265565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061035457607f821691505b6020821081036103675761036661030d565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026103cf7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610392565b6103d98683610392565b95508019841693508086168417925050509392505050565b6000819050919050565b600061041661041161040c846100fc565b6103f1565b6100fc565b9050919050565b6000819050919050565b610430836103fb565b61044461043c8261041d565b84845461039f565b825550505050565b600090565b61045961044c565b610464818484610427565b505050565b5b818110156104885761047d600082610451565b60018101905061046a565b5050565b601f8211156104cd5761049e8161036d565b6104a784610382565b810160208510156104b6578190505b6104ca6104c285610382565b830182610469565b50505b505050565b600082821c905092915050565b60006104f0600019846008026104d2565b1980831691505092915050565b600061050983836104df565b9150826002028217905092915050565b61052282610302565b67ffffffffffffffff81111561053b5761053a61014d565b5b610545825461033c565b61055082828561048c565b600060209050601f8311600181146105835760008415610571578287015190505b61057b85826104fd565b8655506105e3565b601f1984166105918661036d565b60005b828110156105b957848901518255600182019150602085019450602081019050610594565b868310156105d657848901516105d2601f8916826104df565b8355505b6001600288020188555050505b505050505050565b61016f806105fa6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063893d20e81461003b578063d46300fd14610059575b600080fd5b610043610077565b60405161005091906100ea565b60405180910390f35b6100616100a0565b60405161006e919061011e565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006001905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100d4826100a9565b9050919050565b6100e4816100c9565b82525050565b60006020820190506100ff60008301846100db565b92915050565b6000819050919050565b61011881610105565b82525050565b6000602082019050610133600083018461010f565b9291505056fea264697066735822122096d0f807114d408e2aa4f29fa4fa9774523526abe709bbf7de02dbe02a245ae264736f6c63430008130033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c8063893d20e81461003b578063d46300fd14610059575b600080fd5b610043610077565b60405161005091906100ea565b60405180910390f35b6100616100a0565b60405161006e919061011e565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006001905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100d4826100a9565b9050919050565b6100e4816100c9565b82525050565b60006020820190506100ff60008301846100db565b92915050565b6000819050919050565b61011881610105565b82525050565b6000602082019050610133600083018461010f565b9291505056fea264697066735822122096d0f807114d408e2aa4f29fa4fa9774523526abe709bbf7de02dbe02a245ae264736f6c63430008130033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "A",
    constructorArgs: [_owner: AbiParameterToPrimitiveType<{"name":"_owner","type":"address"}>, AbiParameterToPrimitiveType<{"name":"","type":"uint256"}>, _name: AbiParameterToPrimitiveType<{"name":"_name","type":"string"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<A$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/A.sol:A",
    constructorArgs: [_owner: AbiParameterToPrimitiveType<{"name":"_owner","type":"address"}>, AbiParameterToPrimitiveType<{"name":"","type":"uint256"}>, _name: AbiParameterToPrimitiveType<{"name":"_name","type":"string"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<A$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "A",
    constructorArgs: [_owner: AbiParameterToPrimitiveType<{"name":"_owner","type":"address"}>, AbiParameterToPrimitiveType<{"name":"","type":"uint256"}>, _name: AbiParameterToPrimitiveType<{"name":"_name","type":"string"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<A$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/A.sol:A",
    constructorArgs: [_owner: AbiParameterToPrimitiveType<{"name":"_owner","type":"address"}>, AbiParameterToPrimitiveType<{"name":"","type":"uint256"}>, _name: AbiParameterToPrimitiveType<{"name":"_name","type":"string"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<A$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "A",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<A$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/A.sol:A",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<A$Type["abi"]>>;
}