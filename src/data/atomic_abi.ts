export const abi = `[
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "addAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "video_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "comment_message",
        "type": "string"
      }
    ],
    "name": "addComment",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "_title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_url",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_thumb_url",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_duration",
            "type": "uint256"
          },
          {
            "internalType": "string[]",
            "name": "_keywords",
            "type": "string[]"
          }
        ],
        "internalType": "struct Atomic.VideoAdd",
        "name": "_video_add",
        "type": "tuple"
      },
      {
        "internalType": "uint256[]",
        "name": "_attributions",
        "type": "uint256[]"
      },
      {
        "internalType": "string",
        "name": "_near_id",
        "type": "string"
      }
    ],
    "name": "addVideo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "video_id",
        "type": "uint256"
      }
    ],
    "name": "adminDeleteVideo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_video_id",
        "type": "uint256"
      }
    ],
    "name": "deleteVideo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "getAddressNearID",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "video_id",
        "type": "uint256"
      }
    ],
    "name": "getAttributions",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "video_id",
        "type": "uint256"
      }
    ],
    "name": "getComments",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "poster",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "message",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          }
        ],
        "internalType": "struct Atomic.Comment[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "size",
        "type": "uint256"
      }
    ],
    "name": "getLatestVideos",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "url",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "thumb_url",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "keywords",
                "type": "string[]"
              },
              {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              }
            ],
            "internalType": "struct Atomic.Video",
            "name": "video",
            "type": "tuple"
          },
          {
            "internalType": "string",
            "name": "near_id",
            "type": "string"
          }
        ],
        "internalType": "struct Atomic.VideoWithNearID[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
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
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "video_id",
        "type": "uint256"
      }
    ],
    "name": "getVideo",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "url",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "thumb_url",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "keywords",
                "type": "string[]"
              },
              {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              }
            ],
            "internalType": "struct Atomic.Video",
            "name": "video",
            "type": "tuple"
          },
          {
            "internalType": "string",
            "name": "near_id",
            "type": "string"
          }
        ],
        "internalType": "struct Atomic.VideoWithNearID",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_near_id",
        "type": "string"
      }
    ],
    "name": "getVideoByNearID",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "url",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "thumb_url",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "keywords",
                "type": "string[]"
              },
              {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              }
            ],
            "internalType": "struct Atomic.Video",
            "name": "video",
            "type": "tuple"
          },
          {
            "internalType": "string",
            "name": "near_id",
            "type": "string"
          }
        ],
        "internalType": "struct Atomic.VideoWithNearID[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "terms",
        "type": "string[]"
      }
    ],
    "name": "getVideosByTerm",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "url",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "thumb_url",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "keywords",
                "type": "string[]"
              },
              {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              }
            ],
            "internalType": "struct Atomic.Video",
            "name": "video",
            "type": "tuple"
          },
          {
            "internalType": "string",
            "name": "near_id",
            "type": "string"
          }
        ],
        "internalType": "struct Atomic.VideoWithNearID[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_near_id",
        "type": "string"
      }
    ],
    "name": "setNearID",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]`;
