pragma solidity ^0.4.4;
pragma experimental ABIEncoderV2;

contract Voting {
  
  mapping(string => uint16) private votesReceived;

  //候選人名單
  string[] public candidateList;

  //建構子 初始候選人名單
  constructor(string[] candidateNames) public {
    candidateList = candidateNames;
  }

  //查詢候選人票數
  function totalVotesFor(string name)  constant public returns(uint16) {
    //先檢查參數是否正確
    require(validCandidate(name) == true);
    // assert(validCandidate(candidate) == true);
    return votesReceived[name];
  }

  //投票
  function voteForCandidate(string name) public {
    assert(validCandidate(name) == true);
    votesReceived[name] += 1;
  }

  //檢查投票參數
  function validCandidate(string name) constant public returns(bool) {
    for(uint i = 0;i < candidateList.length;i++) {
      //solidity無法直接比對字串，必須轉成byte才能比對
      if (keccak256(candidateList[i]) == keccak256(name)) {
        return true;
      }
    }
    return false;
  }
}