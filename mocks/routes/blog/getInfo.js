const DATA = {
  result: [
    {
      id: 1,
      blog: {
        title: "Заголовок новости 1",
        description:
          "Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam.  Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam...",
        image:
          "https://yandex-images.clstorage.net/M9gFx9385/e465cf4Ym3/uSrdk2C1s777vycgANKLCdrM2tuAnMHBtuLp-vKqlkCk6bxDLkSizddwsjMOHo88BBTFLRwzoCP3I5MpivuS-_59nscj_qT--a16LUzVgg3Fh8eYld7YxbG75fu1-8sAr7z1CyEWyfGjUpIJd33_Qn1q2HkXZ_0_vWHeEODu65C3LO62Zbbcp_GnUyEl0Jgm0on_x6HQ-Y2316Ga1OPECeWTyyhrQdTniH2dB3tW011gRvBOMnbvNNpF-xvZncGCpzjohEiX-qT1lkEKFs2GG-y39tOZ__6ZpcCkv-bM0BXmsMEaT1LM4JJVnTh0bOJ2cGXkdTN04gPUWO0J8YLlrIA757BjsNmB97xbDjLujQbIttv5uN_lv5bNjpnd3O0l-5vcMUVE3vyVfqokbWzSZFhe9W4-Uuoz1ULAOfSvy5CbA8OzVKjOt_mVWgEE0psK7LLYxqXf5q6Tz72wx-LfF-Ko_zRdUe_FjGm0DFd_1WB_bsJJL0fuDf11zTbModKcrSbvoWSt8LbwpGIIK9W9OOWs2u-y9tCEjfO8itHAyCL_l-oyWH_47Yl3qjRpf_N8UUzjagpa9zfLVc43xrrOvrcM2Z5DoteV1LRjDDLLlSPPsNbKvfjph77vkb_E3-wUwZ7FOkx_3e2aVYE-YX3FRn1x1VYMZewqy37iJeil4ZGYHuWDaonxp-qpYhMT3qM99pb26ZbLzaSTzbG68PT-PteO3StWTfrplUW_HkJL8258a8tXIEvMIctV-C3YvNyVrA3wg3Gv5J75gm0SNfWDONCG_ci8-eC9se2wjsr3xwPus-MeTXXj6rpBghRIZ9tsTW7WYBpz0y7fVM050aLLsqk7-IR0h_aAxaJEFi3Lvw3EhM3ypN_ampfUoKXK28wdzbL6HXdmzMCNR4YBXk3AfH1o8l4rS-sB4nv5PPGM5LGuA-i0c5_UgPqJawwO-4sG96_V1Lv94ZqR55mSw8w",
      },
    },
    {
      id: 2,
      blog: {
        title: "Заголовок новости 2",
        description:
          "Massa scipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam.  Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam...",
        image:
          "https://yandex-images.clstorage.net/M9gFx9385/e465cf4Ym3/uSrdk2C1s777vycgANKLCdrM2tuAnMHBtuLp-vKqlkCk6bxDLkSizddwsjMOHo88BBTFLRwzoCP3I5MpivuS-_59nscj_qT--a16LUzVgg3Fh8eYld7YxbG75fu1-8sAr7z1CyEWyfGjUpIJd33_Qn1q2HkXZ_0_vWHeEODu65C3LO62Zbbcp_GnUyEl0Jgm0on_x6HQ-Y2316Ga1OPECeWTyyhrQdTniH2dB3tW011gRvBOMnbvNNpF-xvZncGCpzjohEiX-qT1lkEKFs2GG-y39tOZ__6ZpcCkv-bM0BXmsMEaT1LM4JJVnTh0bOJ2cGXkdTN04gPUWO0J8YLlrIA757BjsNmB97xbDjLujQbIttv5uN_lv5bNjpnd3O0l-5vcMUVE3vyVfqokbWzSZFhe9W4-Uuoz1ULAOfSvy5CbA8OzVKjOt_mVWgEE0psK7LLYxqXf5q6Tz72wx-LfF-Ko_zRdUe_FjGm0DFd_1WB_bsJJL0fuDf11zTbModKcrSbvoWSt8LbwpGIIK9W9OOWs2u-y9tCEjfO8itHAyCL_l-oyWH_47Yl3qjRpf_N8UUzjagpa9zfLVc43xrrOvrcM2Z5DoteV1LRjDDLLlSPPsNbKvfjph77vkb_E3-wUwZ7FOkx_3e2aVYE-YX3FRn1x1VYMZewqy37iJeil4ZGYHuWDaonxp-qpYhMT3qM99pb26ZbLzaSTzbG68PT-PteO3StWTfrplUW_HkJL8258a8tXIEvMIctV-C3YvNyVrA3wg3Gv5J75gm0SNfWDONCG_ci8-eC9se2wjsr3xwPus-MeTXXj6rpBghRIZ9tsTW7WYBpz0y7fVM050aLLsqk7-IR0h_aAxaJEFi3Lvw3EhM3ypN_ampfUoKXK28wdzbL6HXdmzMCNR4YBXk3AfH1o8l4rS-sB4nv5PPGM5LGuA-i0c5_UgPqJawwO-4sG96_V1Lv94ZqR55mSw8w",
      },
    },
  ],
};

module.exports = [
  {
    id: "blog-get-info", // id of the route
    url: "/blog/getInfo",
    method: "GET",
    variants: [
      {
        id: "success",
        response: {
          status: 200,
          body: DATA,
        },
      },
      {
        id: "error",
        response: {
          status: 400,
          body: {
            message: "Error",
          },
        },
      },
    ],
  },
];
