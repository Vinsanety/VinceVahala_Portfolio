app.factory('travelDataFactory', function () {

  const travelData = [
    {
      // S. Maroon Peak
      trip: {
        cardTitle: "South Maroon Peak",
        meta: {
          mainImgSrc: "https://lh3.googleusercontent.com/2YQ7EQIi9cv150AIPV0_dY-ZrMe3ql-1m7cxb_aMbTQTrsuSrPggQFQad0EyIKpVFM-RL0zFzqHLz-rybMR5ByDvD-yLIAdFPWZDSReeH3Oz6e6uSrkS8TwZjFtx5Vcpg6hq5JUzmqGRi2iUm7An_nJryrupwb6KtuXKyHSHOL-ZDF8cfNXZ_Yz7k8Mvjn4ICuk20H27pefgtnD1LOT3pG25pY1ySx_SzPeaczSpEYgFgTBAginJQE2RLfvOEFNf1kDBlvWodzmhVs5fQ5pmsQUpwo4J2vKnO_KJIm1-RC5lEv137-QNfP_dhRAdZMYo0Kihy9G7vsl4W0GvCCQMkeHBpnH3thN2OBG5HIL6mO5gtJsdBNM-oiTd4bcRn9D1LnAjP41B753FCXl9kv4oW30SQxahXtnYT_4joJ3nQVGLJqjeYitLZsJAzx83C4tIfs6OV2_38Zb5pk_r1FfaIoMineo9K2OltrwZIjzcziHIdSvTrzkgNjK9eO_e3cL8FyXPTYHtPFej5hj_6gZyvjv7cIJx7bVKNkL2VS6ioDecne9rg6gyStNgFRBknj3rQzlF_efvNPFnchsWvPys30KiVwg-U35ZW0Pb1yOgKfBI86LDV86OXo9SuCz0dXUqs8uCDXa3gphBgZsOlWgA3AVsM8peNhs=w1057-h789-no",
          cardLocationSrc: "https://www.google.com/maps/place/Maroon+Bells-Snowmass+Wilderness+-+White+River/@39.1109991,-107.01823,15z/data=!4m12!1m6!3m5!1s0x0:0x5d436e036dfee9c6!2sMaroon+Bells-Snowmass+Wilderness+-+White+River!8m2!3d39.1109991!4d-107.01823!3m4!1s0x0:0x5d436e036dfee9c6!8m2!3d39.1109991!4d-107.01823",
          cardLocation: "Pitkin County, CO",
          cardDate: "August 2017",
          cardSubTitle: "Maroon Bells South Peak Summit Trip",
          cardTagline: "Where beautiful women instinctively flock like the salmon of Capistrano.",
        },
        img: [
          {
            src: "https://lh3.googleusercontent.com/zzjYngR6Y_DdwrfVupMRyrb4h24l0g4IG9qu7NeEOdB47FawwgQ-0OjhEhXjxXVemU4UyiqojOuaYREjDC2ZXOLRDxh4loUZamnngq6HHLPkmEgRXlG3zAJwA1VfWLFiv86Y3pGDLZRCaB1Be7IoeAfFSH7HxbPgCqj9J-0YT_19TDqErqY8ALTCRuE1A7Z_24t8C7ayohHHSWkfEYpth_8BLkeBkKnrpLwAoi2liPz5eelBqEuuPcjbB-Br0rColUfpwZ25864QgSir-EvPj0oYxE2McVvv4vdZixvOQmxvcMmAtq0LLsCpw3m7l09b1LwomCXZVL0Sy0RM5PmHzpwKz_wmoiOBno5b80NvrnR3ozF3ShnMfMauSqqNbyXlFODx668AVRj9lMpzl61QjFL3e1QpYZgY8fqA1imTjAbhufL7xW_XoBFX6iYytHky1AlY0heeBwo9O2ppCgi5psHy0VG9eI7NHF0t0aOaJ0S45pSG-hXAAEww9WcopuCjScgLdilAlu9ayvb2DT7h0vp2p55_m90rMiwKqHy_XEPcvkPo8rUnHJqC51azT-lZOreiyxzoMoPCjZ02YpVqOZ0wZ_XJEJFUOJDhPY9nTkKCkvIuDHeK2M4Aco_97S0fsLwCID3dbKGvWTuln4COjitHl6Yh5wM=w833-h789-no",
            description: "Backpacking in the night before to Crater Lake (approx 2 miles), I ran into some of these mule deer",
          },
          {
            src: "https://lh3.googleusercontent.com/m0zp04FgCwNqT1llycsAfGojU1y_Jiuy94B12e3_9-HeJAaQgbOGih9Ke9UaiDuhsMScK5hT4ben2UVA3rQsh1467AH6fw1cbLketjJ2060aT-Bq3WWN4vcYXEvwiOBOXlRZyZkzpFDWDC10X68BsUum_XD4MUy9hd-fK6oc03zZ1ksiR3Rofnk9Y78IrDfVqEdk63g_nHw6vWD7Vjpy0nnrbYmAwGPQXuQYFpLRb8NCTRZSwJ_Gq1YFzsrgg9rpzwCKcwkXwD0TVZfIUp8eEyQjbzPPfnFEK3ISKqHTwO6uQQC5yS_PPV96AkFe-KqI0I1SqPlnyu3zQ_fi0SBt2CRy7eVpxIsmqZY1rHiA8h5IFK1wNHxQZOi9MuRtaD2w9yyuWPSPGCSuxvdrhI0pdmbqPTqLhGfyOqi_hwooBx8H0jrfoAZWC8CKR-eP85bKTxuBxka6ZUTVuayaGypJBc8GcfnpQNG9PTf9paVX04xNqSVzkqRqBBmKZbz7J4wUv3qBjZgqQjyS6W709tDYjA8ts_Pz7OQKd0QzQ5SoOR4fMZB2QF5CtEH06dMzDX4w2Bhpfv8e8VxDj28BkT4_t9-b8kCZrMGdv8odwrSGnkldwHargUv3uLqwnzJ-3R2ahr0BqTY6Y1GLFSquM0EbmzsWM9cWFmM=w1052-h789-no",
            description: "Morning Sun",
          },
          {
            src: "https://lh3.googleusercontent.com/EgzV2iPdme92VZx9RIc3dIrNQswT04gyMLbIQMzcRn6wN0MW60o3MFbUVhBDW78Ty7uXZ9hOWLNBm4fP6NpSeysNgpuodS6KMkRDwNSo7eYrUUBOX0I0AlAISQskser5U5HIi2UFLaA_IZBJo_5ul2yAQc_Y3tZi456GiJfaa3JC2PBk264r9gwwpk-2_i1bD2BFiP1KwCl9qfWfPUGC7JwsQJ_LYOQBJhVHoDaHAcXPwn4kTkcy1anC6MSsnzC7UIH02jhmn96ybVw1vDNA-5bcnhlAvLcel615IyrNpb6cCUtL23BcST2sOgKwp6hpxixH9Ze_8u8HR9YAnmvcb1yYTaBOKaMZsyklV1Y_8Sao6wyUeNC2TTRHUtYRfJ8NKI8bvYVyhWmBwNxW76S1VbLkty5yxwll4z5B9fGrbqJUTdmtOmyHLk9NFg1-kA0mTaFcFUpsXp3mpWr71vG5bEXmPs8Ya1hx6cFiywO78EiuY1FYSlZ5Ki2MkkQPFPOVZ4rM5F8Uy_c7Diaz5KGPvYqrZd74pJL1bA2vNQtipQVVOXFmgeNTgABprUL-78ea5HGvDe6TjRTD9dipP9AnHqri7yEM0F9VBhNfM_5R5cSasy_Qot3UIcH_GS9SERnRVE__39VFZPdicIf7_Lap8J5TYb9xNto=w1052-h789-no",
            description:  "Looking NorthEast back towards the trail",
          },
          {
            src: "https://lh3.googleusercontent.com/VnADUVZzUPYuxw-xi_3HNljWmJ2-uKWoc7DprPmXN1ZJpiUyX4ZVlHm8grJC-iIqBwvIxTAjHjR2v5O4_kzZPofg3uW0_fzNBPST2gPESfSrJ67LyN_MURdoFe5--uZBfwCANUdGo30BeHokqzph2NbbKPQTIQTQtz1trx-gLoNZs6VFr-pzwETTxoYyVB5WRXYoU9e0cTmqetCA66yvPkfwdDBt8bHoZVZu5XVxgsTFbhDkMWHs0GjlvEMYqeEYG3DHbmCPxzGFMUiqgujtl5ttFE7jeY4f2T8mptJm6_SI4VSBmi86PNuVb_vnC8ugYeSWW1joEdPIs4QOvFvYgxj1FM9Xsfe0SB6h7SQGdRSEIDpYoi1yJyCdFGqEwmSKCRa0xE8RIUjyfx40KeG34nJht68ubH4DzGv2sgrUCZj_dVIqqQwViDT3iRdVEOAOEpvlLD8kdG_EkI8nESm_2mrQYSSruHs7sPkv3rfnvRrzNKkOqgvut-Ji8ljKa65mJNVxikL3qQ5cQ4iy6xL4jO_Rmhhbzl3iwGwGGlCNINHGWDuYM2AAd-dhzoV7xcMQFdOXUz-nXgvXFz6J49OGcw51_UUOlwT_WhpNMomB8pq4KLrAQqh5jknHtayK4QThPOG1MSKCEoyOya1J6JV4HPY-3MThvD0=w1051-h789-no",
            description: "Selfies",
          },
          {
            src: "https://lh3.googleusercontent.com/N5qqZZa1AyT7PBr3RxSj3G6wNGryGqzkcuEV2sc9C8VgKsT9DkvN5_bjwmb4mcuggDnpCFji1S2PDLG6gWGDoMcPQR9YSsZFSBZD0NawcYXwptMhGxq0t2Oto-CsL0kTKomXYZY-RMiqO-uyWkr90BPm2qSNcRPWgUZDMTwfH9ihaTMEtRdYpsvBztCUueELt7r7FQlguqJ5lscRKezisJ4WcLt9croG0CfF1vAVCQ1RLUE9ljHE7PJEHxVDslbZ5Dn6FsWqh83RzAD0el2eBqBVtTNWorKzWisXzf6U00J8bmeSuYXG6ybfFEuuGczyE8XygKc65IitildnX1LNcERnRIg958_5jRdJSxEFPUWrEyr13xkPnSfZKdt3jSpdp6IdjX-9L11ufeG9gm0RXkGKF9ODgxc1fTHBZxk0aT8bShJfr0Ed_NnY2sAI-N0s_4VKrouYif3wHS1-1SJt5aPY3hM6JxdfKwSw6zJo_EW152F5XLB2e92e0MWGPJUC-7Cn6L4_BIPD_4N4HYuG83WnJrhpm6PzQDVSKy886zrfKy3MDYNQiD5MxPyi-LvpCkylC__5Nk4fVEKNdzC2_uSiuQ5nGqzcATrP7AXqrV9vUY19YVQX3vMQxU-Q5e9SdgFpn4E55UB0DRdjDXOYgV1dn8X2ZcM=w1052-h789-no",
            description: "Look closely to see some Mountain Doggos (goats)",
          },
          {
            src: "https://lh3.googleusercontent.com/N5qqZZa1AyT7PBr3RxSj3G6wNGryGqzkcuEV2sc9C8VgKsT9DkvN5_bjwmb4mcuggDnpCFji1S2PDLG6gWGDoMcPQR9YSsZFSBZD0NawcYXwptMhGxq0t2Oto-CsL0kTKomXYZY-RMiqO-uyWkr90BPm2qSNcRPWgUZDMTwfH9ihaTMEtRdYpsvBztCUueELt7r7FQlguqJ5lscRKezisJ4WcLt9croG0CfF1vAVCQ1RLUE9ljHE7PJEHxVDslbZ5Dn6FsWqh83RzAD0el2eBqBVtTNWorKzWisXzf6U00J8bmeSuYXG6ybfFEuuGczyE8XygKc65IitildnX1LNcERnRIg958_5jRdJSxEFPUWrEyr13xkPnSfZKdt3jSpdp6IdjX-9L11ufeG9gm0RXkGKF9ODgxc1fTHBZxk0aT8bShJfr0Ed_NnY2sAI-N0s_4VKrouYif3wHS1-1SJt5aPY3hM6JxdfKwSw6zJo_EW152F5XLB2e92e0MWGPJUC-7Cn6L4_BIPD_4N4HYuG83WnJrhpm6PzQDVSKy886zrfKy3MDYNQiD5MxPyi-LvpCkylC__5Nk4fVEKNdzC2_uSiuQ5nGqzcATrP7AXqrV9vUY19YVQX3vMQxU-Q5e9SdgFpn4E55UB0DRdjDXOYgV1dn8X2ZcM=w1052-h789-no",
            description: "Look closely to see some Mountain Doggos (goats)",
          },
          {
            src: "https://lh3.googleusercontent.com/ZG0k35GiSCiEDRvwmYqvYyAsginnzGbWMGu1-8Bf1-fEKQb4eJmF2X1tN6diBaYGC_4z1eNCsERVNNgc8rueoPUz1hFPz6oTVF23qq3wma6jVNsDecm7X7O2yd91lIJfjjP0UqAzifgYhdpB99xCT01r2eQmxUr_HP1ncOeRGRZyH0istOlf2Tal-3ONF2r4yO0aeeyc12qBzoZGM3GlkQOiRqHgFim5RAo6BNYrADdR3jVoVjv39qerZGEaNn0G-7ilxMGqdGkij0z4LIKK1r7l9scAe_sxf14qCNpekbHTQoWymdjttb0yYMflty89Z0rqCnsFX91l-mLEsOF9eAVZrULsOjeUnHEn_aQ5KYCCSd-ZzGSfJr9idVLE9DS2jU-8RQuB2CLouaI0QAH3HY0bhE2HSebu_VjILk6LHq3RdNXpfD833n6t8aNVeoCma9FgamUuLan5i-bP9bFoEfmrBwjbCavF9UMoF7CbzNMKXBdsk5RRQH3HBVB82ndac08WPL6QWu7EsZK7JUQcDCZZIucBy8hs7KmrZxN0xxHJ8ih1nBm12qufgMCfDm4_YAkXSfzj5kpb0X3VmxKbLR0WuMW0rSH4lRHNv4xo5DAiBiObWBNatbL556v-m6Oeo3ArkSrKlbwybzO6fRes4RheH1kMkb0=w1440-h788-no",
            description: "Morning Panos looking SE",
          },
          {
            src: "https://lh3.googleusercontent.com/2YQ7EQIi9cv150AIPV0_dY-ZrMe3ql-1m7cxb_aMbTQTrsuSrPggQFQad0EyIKpVFM-RL0zFzqHLz-rybMR5ByDvD-yLIAdFPWZDSReeH3Oz6e6uSrkS8TwZjFtx5Vcpg6hq5JUzmqGRi2iUm7An_nJryrupwb6KtuXKyHSHOL-ZDF8cfNXZ_Yz7k8Mvjn4ICuk20H27pefgtnD1LOT3pG25pY1ySx_SzPeaczSpEYgFgTBAginJQE2RLfvOEFNf1kDBlvWodzmhVs5fQ5pmsQUpwo4J2vKnO_KJIm1-RC5lEv137-QNfP_dhRAdZMYo0Kihy9G7vsl4W0GvCCQMkeHBpnH3thN2OBG5HIL6mO5gtJsdBNM-oiTd4bcRn9D1LnAjP41B753FCXl9kv4oW30SQxahXtnYT_4joJ3nQVGLJqjeYitLZsJAzx83C4tIfs6OV2_38Zb5pk_r1FfaIoMineo9K2OltrwZIjzcziHIdSvTrzkgNjK9eO_e3cL8FyXPTYHtPFej5hj_6gZyvjv7cIJx7bVKNkL2VS6ioDecne9rg6gyStNgFRBknj3rQzlF_efvNPFnchsWvPys30KiVwg-U35ZW0Pb1yOgKfBI86LDV86OXo9SuCz0dXUqs8uCDXa3gphBgZsOlWgA3AVsM8peNhs=w1057-h789-no",
            description: "Snowmass in the distance, her majesty, South Maroon Peak to the right",
          },
          {
            src: "https://lh3.googleusercontent.com/W_-LYQ7iMN1V4mtH9jua4tCPRxMva8Gp4mxhIlpG6yLYxtGThtLdvo5cbnb5cqgu_qa5JG-b0iZXfj8cuo3ZoD6pMEkUJIevAiHI9YMBE98ijciHPYZL7c-B1ux9sV2DP24XUhGvfFhlOPyqCZK-9XbRQeeB2D4WmwneNXjDOQ8u4ITrExTyJ8TyLNrnuaglpDLNaJBauiSnB6UhBkarz948c8DSJ7MouJLNMMMVTHJkbuUEJPSCzyqhOhn2C_3agZ7YW9QwI7fC6SaQ31KAkkl18uaXEo3ihvlrzJEKp2cCUW0rAFaBCT7kfNHvn_eNScEncXXS0E7A2CpEh5c7xuylQel9PW8hLKNz06y2BvApulNNHFBPjjCnE6txzDlOA2se3j84oHyetCLuilxUK_4mUXf7x2iclkIE5oJ3BhIsszRcrsMcX54eVrp8_ENh4MQK6Tk77JzZccNlvG-xTiWnNg5WAo9_hSb5_j37e7-eYX5023cvgmbKjuwY0DgcPoeLZAg-Qu5nSN_aOOY2FRQrXH5rTL7lzHPXTKQ6l44wBwz9nIOnesGCbrXAiQ2DFDqxcnLuqOlPOiH3FUPDNIOLjFJji7qEn4-_Y3hFK9K5zsiqJdemB62TcOAQQ3v2y9tFMg_y6njHyEy2UFi75pOg1dEoPP0=w1052-h789-no",
            description: "E x p o s u r e",
          },
          {
            src: "https://lh3.googleusercontent.com/b4uhR0PPrrB_s8p6rGnUbl8ebNlyj0ZNjrUhcaruwfVpFcm-_pP3I3ldD8Hz7lA3bigqmHf0wVjfe8HwvYhF1sgb9aRE1MHtk4h73e5scPiaGhvYoq1CF12POdHTEzU099Jpns_J6GxBUF780HA2Xty9JsCDkaz73LKtOojJSUzL2rZ6326PIijACH5v5JLvzQMullnEqtHWAU0ShGC1hKtZcWlefTrqHcLcU9FyvOAIVO-FpQhuYq0ifi-mSdhHACfYioVk8FoJLi3Fzmygt0SNHRI37fRwb8LaDG861eSkDVXvUdITcS9lk4wxQy-I00-zQm_XWKQMW2FTJtMmGhJ5__Z7iebdfSs5FshFmsYjMpLeNSmXUTllwryX-ar5LBcJCiHowEc28AbCPOdDDLyqGS9h1f4-AUtj3OIncBS3YELHvCEc4oWZ0gEMiqRtiv7vNvTV4L8paSnkEE4TPN82aiOBqBonHvwe9yu7bURxiAY44hu2V2T8TwNK7oW0_yRK3YtN9UQMpDObXXbyPTO0iQJYk8dnGhATsmSK4kcetRdPb5ERy2Grx1JGZW2LIY144k9ZapkFzXNdOMhChZnH2tng6qCU5FkU26iP1zXwSEti2Gr2OQPsxLreOBX2BNhYapEK5bZWQ3oZJ3cS_NJOxqekOec=w1052-h789-no",
            description: "Looking towards the North Maroon Peak",
          },
          {
            src: "https://lh3.googleusercontent.com/tTXGCxcxeB1XnPnZ-0us8KlLYmtVRPGcLQreAKKVD4MCnIcu1R-aNUSA9V7dS8xgCVR5-I42J9ipzQY_jKjW8gO15Ho4obAfHTWgqOuZp-_DcTQQN66XczwTvu5lwDg9hGQRHnVfRI_NKsfx6PU1C6orpcNcjNsmsDADYpbu-VgASxyjrovzI_Hw4ZUIUS1GUta5bkTGYy2dHczEX_WkIXj3ybHvwig5Cjijm00hbE3JTRNwAQcItK6bEUhN3E7KMlKRYPAxyBEnoz16d9rd8uw6S6vDnoTEokXcClCzC8oBol2tfgjfPBhDe6ZtQGddMKv4lcY0iCx_ORbg3iYwmen5zARcRqUSunkj4ttrYGBRR1rRr-D_5vSDIl8h5DZcRMT1WJIwMU4n8txEeOnr3lnWZIky52hkpu1_6Ebsu9MztTHTk7j_nQ1gnMYkeEn3wxzeJ1KFGfhgyaybi6oihDwZ1hszN1O4QQGZ6xg07-tX6tYKSHxaEJOB39XG7YbQIQBLKWwo6s5DXc2qOmo3wLZU3xYIHSdRZexhbWRAIK731C5xtkBdzuPSq6fi3iOrXiq4iLRCCE_sHVWzi_ErZKTo7hTzteftCBT15vhdBhFsKZ94oMBpUZ044oMw4jyplMTaAEXXRW6sfciycKamWyIFA70S9Lk=w1440-h754-no",
            description: "Summit views",
          },
          {
            src: "https://lh3.googleusercontent.com/lz6PtdPv_VCybTjDzbgwpunO4VuE-tmBMER_tk8_o2qEEnggAUFPOtfLgfWOb_6C6ZP0TLF-oTHCXImZheNMQfHsC9m4-xRfkPBp-_Wi3qd_lmlPcUyG1jjKCwiuSGt6HVy0sdrRp7t7M1XuccF98oE3ZlxGF1xDmm-jv8EfMWiVnYWRFKyHiqdk_KQDHLfGf3J1ZNKx_sX_rOoeflesUBKzmiRQ7d2kjhj2So0TyHihuzUxCecjWC3kTchVcrVN5eyt2MxdtgLvzcJu0ZCqwJOBeB2ofcFoMyiTh4EmPsQxOAt5vwlF-PTz8qolgRk1fJb6xxDsjnAG-YbIfxqzbcl0g6uo6X5_emOexK3EWTHGHMbClSD6MaIzZP9bPWWLfW7esxnyE0IJbXOfJDHLloak55MboDtTz7GUxNQhrj9is2P7108LsdufJOS-g_Oqu2NJP0CA1Z2mqrVdo6v2afqaUGC6jyPqXlHCORGnJjU2ZCGFRebFSP00nTvfkSnd_WP4yEqQdHK6L_w9WiAyRNlg54Ws-dEUrDOHQ_R8tKPQoVwN_sKTEouAthPUSd42fEujlkr7QjnsQeR6mm-AM1uAyRZe2G3oKixenzdsbSFSH69vvx3ezHfkfL5G2qWyEUMbTyOnMsXkApnLsPcLXAYQfHY_RiY=w592-h789-no",
            description: "Which wich gives you a free sammy for this type of photo; why not?",
          },
          {
            src: "https://lh3.googleusercontent.com/LD5R7fHXfAbCuLKnznrxSb7zgo-JqgGVkVlqdh20HRuU4cxpkr3pIca_ouDgHofIp7_Y2F3BVVIcUpOq_VXD9xrvBLPRQ7QbTOPAKOSPyQl9kyojEjxrOgMjFNLRoaPUT8aboQPAz5o3nIeTHP97sR_95WsqBdNVBTpY2MhDhVomN3f5jCzwW6eIYTKW80wqqWEZodEqH_hp3BsoaKYbOR8r54OOWA2QNaiN8IG0EbNJ23rx29k4wdvITywE7zBOaz4dRaY6VkD9DEevU5DsYO60IotGerfLyoSwr2pb7LccbQEk_HeFJmVpYqRbLJYkp_wbUc6c37ubFkL-2l5LgSYD7N63t50X4ipyLc7T06TTWlKjKgJFN7eL7QCMFamFMIidGGcVw-jxqLxzJkBBlGBp7RATvFhx47sfVeIIgkyCSXqf-8PIHg7I7x9utnHXRNXXhYmb0jEEJM6y-s3TLPXq3R78kHciARwodcK8mDGfuACa5rlaT2nEiFokY9VHlnDnh9QL3wlVyTZIq70BL5Eut7Ofv1dFC3VwKmI_VMlv7OP5Rt6tQ-Lyp-Fmoec6FpFa9c_zr6WtNIGg9RmvgvKmDDlnHxrAa_v79thuQIyF8a6st2KTLB-3N9pPK5KGVA9K4NkpYmQQYK7ywonqf0pMdaA8lvw=w592-h789-no",
            description: "Love these moves; exposure and class 3 climbing",
          },
          {
            src: "https://lh3.googleusercontent.com/WgAdYqaI_XmmHZPcnq95EF8xk7-XWfEC0DnAM1MJqRzT0LE6skYONHu7GU45j9wzT4wWGGGwIZlZx8A4D50cwxnQLzYk6giMjnqTXh4xi6CJlWDrCMXqAPCBOAi-RvpMGJGDEpW2egl6idp5dvNsKz26uCgjZN-0-rjvoY9GtgyR6voKQFfmjbFGnFY904CyLWsiiScDsMOlUM0yrLpQIcC7Fff1bLsjrxqu98YED-Jy05uLwjw6g0yz1TyPDhgZf38FM6fJk3f8MgcFK53uE6aMOU-9ztUB-MJ3LoY-XGo4aYJt9BzZ7YyNHXQSW-Hp2boZta0HuVblRWMCJjPgBnLOlil9ndHx0HMYN5fGHjsfHEi9D2xBKn-CT9uqcnNwdyMc_Cw0rDxz6SizJ4lF7jqnog5Z6VJtlc0D5JOj1kLB7bFSUSqnVI5s-ISectuyjX1beAxGa83eeeLOR0xjThBemshIlbLd7EsIgnd6kIeXCHjcqVjtihjtyQXnz68kBksNUrsjZiDmf5Xmn7iPAfUvehoK_7TLuO1zho51Lm0yECsZ0VpgFaeLFNSL4BOmLCuvKHLbjq0PYmAcp2TuEpDkVChQQApCqWPjhFc1lQxkHaerhF_G1yZ1PYfc0VHfjLjjkeU3p_tQdPQm3WL7I5qIqjtLQWM=w1052-h789-no",
            description: "Working my way back down",
          },
          {
            src: "https://lh3.googleusercontent.com/k3uDBggBkESKA9D4c7sIO23F8NlRTYdtvbwY5_PViycvm2CTeMMjWG21_7w97EDQxsM1aqH737WNIjXmA5RYxoQcIfIMDDcKGtl3zTnQYFoopU2sMtEbEuHhe975qO1911rtNzkfgGF9Ev9Q5n1ylGh4NJukrhCZs_eSo9qRiNVNNwlG80eVOarOEPQzYWDXlz1sk5XJm5C9YrbSxG6yN3x3qUWr0r7LyO_lRlYGiZRmgyGpuiwM55XyXlBMOb84sWWPpZNJR1voFPulCP7lf_fG8Sp1FufmyfT6GUMETKiJWt4M8PQ60lIdNzYTcRUDGa6zHAAKUziTKdoNWOhZySQfwi5bhgfRTlmLppUn23cykIA7HHLHNmJI7w0YTYixkTDIqlWxXimWJgpdxhN9WlRwQYyfkZfBpZ3sOUQbH_Cn8SXCrPt1jwUA5vBp3fYr1BNjbkIL7Rob1_UpNFr2qbMllqXd-lh6z2XVa8_-XmsY45EZ3cILl9nr9Uw0M1FZV3xA0L7vCOziX_CL6ZCbx4nDFY905qJiVnSijw1-WtKGcdsws9vm7p2j7-vnjQUf4tH37rVAMVUgKBabrP3xfCwyR6myfZyN5pLYk9jJ9xvH-CSOadGjHxnOAT6gJ2hLGpopHa4yPB8fsyBS2DtLPFch__LSAwA=w1052-h789-no",
            description: "Heading back to camp",
          },
          {
            src: "https://lh3.googleusercontent.com/x55Cvexo8ePiQdZBLi6_zBz2Tb1Mnv3jrsaECx_5G4V7rrleiUUQaogX2NaHyUByHhDO6YOoKAPS91P9QOL9_gKINhCVfhI1GZpyBRmWBWBdMkAcHh7ijQtNmpZebZDexM5hZG0HDMx4olq2RTCspiL5gAViGTWAFG27KRpoEgKm4l6MTIWjL3ZALY7ibNyH32VKOjPFoH1i8ifE4qLFxeFZV8J-kyQBfBoxRLhIy2gYdJ4zpBYZjusCPV9AV5h3Fsd1kkromorsHqGld9riIyG6ff7-XpQH2D9ZtuwAgf-mVxW2ipGj8uAl6hNzhGHA6KVSBkQLdssTheF-p54IwjscfF1M34aLAriLB7gaV8Uu7bDqoqFachXG3SBWIwOYk2VxVBtUjPwrTkKwxZ0T2--VDmK0H3jao0Ly9tiuhYwYkfmCGU7T6dNV1yX2un142a7jbAw1GZ5bIJpL6ags_Kox4Kz2qNndVco_wSEMPaPKvE4y9ueXyAlCbJOpMXmGodKLdSXdzXsm7H3Bk_35HvRyhbvBU8ZhKgQRfoY0LaCWFYP8MWQLneCPOspODAv_NW9tFCkUkiTdUvzn51_3zhivJ8k7wvJueuDY3r_dC1ZWHPyy2aIvdhA0t34X3usNy-MC-A88IOouYUit_aVBrt__Odnh5xU=w1068-h789-no",
            description: "The iconic maroon bells photograph",
          },
        ],
      },
    },
    {
      // San Juan N.F. 2017
      trip: {
        cardTitle: "San Juan National Forest",
        meta: {
          mainImgSrc: "https://lh3.googleusercontent.com/uUhSS9yhh92DNYGOYk5Le_btyGhXwPXmZOH07jsrNoWYttGhpBpcoaw47oIYBgcS0uGNjGFjnfCFhDs6dpE36ugNyjCv5cE9cozR2xaljwSBNAtNXwwq3IgM3PrCHs-SGdM35sb2TT4c6wR-CCgz2Cz8p7X1svpeniWhaV3PftAGRgsAd6Gu63a_Vl-bbQQi7VJJgH0GZ6OQ8d2yMUvHem8DKrHgmmiI1DoznjrCfCsi-csnvhEfjb1C26EeBH35FmQAbZRhEwgB0Sump2kWuAGoCFsyccXRgxMYrvFY0sNtFzXvH_H8CX_-3akTqal2tRcrlRtn4yKjv2T4CA_tbhqtxiUGSOEpZTQlKgRBYPYBljT9cX122Dw0jr3ba5XwDKJ7GX0MrjCcjTAKs4gfOzhQqRk6ur__IZtfaZ6fqjJVHgJPGi2pubLMrnypK-5TA93r57sRk1Aig5oRqHt-j2rGErqgA0vJjbv3--zXKyNzo6myDJCFhB62kz1Aed7z6YAYDRrCVMGxuzhrM3jEufLrESaTNglhEWSrdpT2DvfITsOvomotwzfiLCNGUSygrqUcAQ9fmRZBpI0DSIGZvOpfGwYKBjMk0LSzsWZFr1RmQFf0X4mv1AWJwRXPd4CjlnrC-pz75nVHtdbno9qIfiJggpJAXVk=w1056-h789-no",
          cardLocationSrc: "https://www.google.com/maps/place/San+Juan+National+Forest/@37.5439282,-107.764023,15z/data=!4m5!3m4!1s0x0:0x8449191b182ce7fc!8m2!3d37.5439282!4d-107.764023",
          cardLocation: "Lake City, Co",
          cardDate: "July 2017",
          cardSubTitle: "Redcloud, Sunshine, and Handies 14er summit camp trip",
          cardTagline: "The San Juans are my favorite Colorado range. Secluded, magestic, diverse, vast, and always full of adventure",
        },
        img: [
          {
            src: "https://lh3.googleusercontent.com/g52dNhAhvWY_IURDAcg0j0aAWtNPAo9vSC8xY6jToFIBVhGQfvbUA21mFSVS1SAqHUc0QdVoC_nQ48VTelR0vTAqZXzq8af2oyJDQsciI1hQHntaPzdVl4o6SXw5bN0S78CYDoOPBCcor9vdK1_B6eiwkFuhyqbGxV0Gw5UqQaUqkDRc68nRD8bDZ04U3hqpTBNyTVxmH-m_8a2Y2pKytkvG3mv-zcKHu7eOaNY1hZ8lUdAXHg1qX_0Y-pstjVAbmcIU0ZasMvWFCF8F9zFEYIeGOU6rJ6oT8bMINJShV9uEOwsrKet2YkYXZtZMdLM7qwBRPTbUk0BpD6M8xCANdB7sIv2X2tryhZupHYAYFikOVjKgxAyON0Nn_P0T5CYeeyVG7LOIWcvIVgxEGybt-kITPdR9WHU-cUkYZpQ21K5cC_t2StPUbs2YujfikrCSQ5dzEkD34Ej_yPcmeJhzEyJK1LEcyGRkgJ0yCruqsHO7m9XM6UnmHx3qIByO2zx4PPvgFS2YeQnROHE02xh-6EncPlC0airhiHTLyyzXCnWiK8x0QZF2snkohB7vWxiGBEx2C_2UztMEgXs20XMUEMXgJu1Bc7Zg-UI42Cn3GMOyTFwb82dMuFtt8QuNUNUnIM7pHexHUrRCWEj4duN1F7QQt4fhz4s=w1052-h789-no",
            description: "6:00am looking back towards the trailhead",
          },
          {
            src: "https://lh3.googleusercontent.com/0DbidxX6OlZH1S2m6Aph5F1GQIyHGLtNa2mAkQqnCs38WuA6NqVT9unJbiIoGyO0bOTbG1eTYQizzoRSl5Uk8ZfLz-baX_VL6ViCZbSHcOCm6TU411Y8lOEwcwHjCqkUSX7Puxsey6BuDWJLQc_2CmcKNfEz89veDNZCw5-F2lathrkp2MZNu2wR_BNQSnsF5ltoypclpzbs-EoQsZ6bg9GAaRLFJpWhJlnE5rnj6_Mq8swPKItLIUanjdJ0LLS13PNcscLL3LMs9wZsP5xT48NE_FmtfjUJPXmN4H87D-T8M-sSy5PQN1bsFjZ13XMep9-PPpW1CaENOZeKjsfrRyFGv-ugx1neG6MMD7__VSIjdm0XltUM7kSUpwdw4Sxf95_kfrfpHoCOq4x6daS7qv86-cmrNxzt7ZGFHyeTa2-XRWV7gpdHhiXbjOPMu6Gq86Blh1LkIyXqbT59MgBqxxb0scIMIcvLoYqc729vTH6DMGrZG48Dt2bk_7_DD4ioZtSnHc0N4n-PdzRoEIAJfyc0lvpt6cZTsNUVlowYsftWJ9gLIa9r8tey_A9-jzTCIbXU_VnkaqjrDcH_CgQDCs7p5ble4D0lFDxXWG-A4KSY9NwO450TgDuMQi0EEkyPVLXUw4gZySOitip_RqAtLOd2K5L6Ua0=w1052-h789-no",
            description: "Morning sun",
          },
          {
            src: "https://lh3.googleusercontent.com/vxTb4gR1TgZ3Aa4FYP21sLcsjfIEGdOJ4SZ66ZJcchg9ms8Su3rD9UqsAXQkEwDzgpa0IOw8nB_yJZQUC_SnpNKaCIKtcYp5RPhLy-oJPEdGwjA7jq1VHYChZ8bRBocxs_dcCA4Pc8jwHJnFRK4xbzHTcWCLyDT5G3-zmCGMOkFaP9jbErQ2qTOsCV9oIx2sx-JjsUbG5b50EBrY62SoOcFvk9gTRiH_qDtS0S7NNymu7YUC7L-OjTTwOKtWSUNdfECFISpCempeIgIZ08hb2lXSuFHfnZmTK1WWmLrrW0_UR5j0mnsOoMGO2wYt1q8Y0_QSnhWkdJSd4iORugw5aDa_wFrWA_QD2EWeAOurO81OoFKrE0czW6Or8byRicQwts9-uCTvCeefLWPs2fSL-yhiT-3ry4R1WFQizPvXh3z6yiPC5-QxTuaR8xf4U0EuoLzcdHm7gTdE57H3oziaMw10by9SC36PGz1uWIhDX-iIPVsaA3zBC73DdGsITBVQWQJkkUqDIq1B2cs-0FCXRqGca8N7bKCzmOUs20xZ9H_SZZ-iC042kLH8J71YrC7hSz_cZmiL4VZ-N1KWUH1yDJBwFZHaNNV15J29azzjeYZgd3ZZoTlqj7ZYfAz7J-qmD7wxTVo80UgizJSGDlGC7whgSFR_6mA=w1052-h789-no",
            description: "Working up the trail",
          },
          {
            src: "https://lh3.googleusercontent.com/eWEIka_W2o_Q7BYoDItsJNKWTR6aOHnpV7wfVMnRlH8szGZUM6Qrw5TlT7pqN4dk_mZl95uOyHKC5pKlbRYimifBCmvjo1aDiI2V8lIAm9hX_0xi5dS0-J6V2Ll9UOZU629mCGaKmbbQZQjJOIkLkcCVaRs1jxL8uuTcUuqMV6U0um39H3K1d0Z6sFJDl7M9ewQgjLOgsFmwD_lI1g0FIVMDZQexcTSowj0M0-xNXppcXWaskD-tH0zw7ZKELRM-QANykkAhooopzvFvYzMsCqt7otn7GxthgF-S82ObMDMAj0nGFErhYvwtnFY4RjhBtLqTreyG0HzuJNP0aPNh4RmRgNgJJdxlYVvlnYFJ4ZPQDCsyjrQTcTOlwIlE7BRYEkmoeUWUvj9hd-bh738DQMtRLU7TGYSHAy5cEqpPAtnWDsSnH5RQ4-49tSaV48_0JHMm0Gijwvt9Sleit1arIRXJf0rS47Vo6ArrIzolWjLFJRJqJP4Ep7MqjgYdV_VezdSSTGAkoTQpnfxeU0YHJRIz3pmE9dKSH478dMtTclkS5ACHBq2va_yIjAQCIMTV5E25X59gbR6Q9lR6SViRe3hviV6f48bRqy9TJE8JrGVpVf4NUoP3uAOxAmgFNGqr9fRRI9YaDQFY4D5VZEcf9EYwliyFa9s=w1052-h789-no",
            description: "On the Summit of Redcloud Peak. Wetterhorn Peak(center) and Uncompahgre Peak(right) in the distance",
          },
          {
            src: "https://lh3.googleusercontent.com/7PUOtrKUh5HlGD3x0ayjKNbFsiSnxng0fv0ztcLOO3PBFN_C9l93DBVIvw-228fxH_Qdac-WlVbvTkKZmgsiHZo4m_xI5p07dVvmeBmsfYmuSOVsQsNg-qRGyCkOh-L-U9pS0T3_UGcxa-KrYqH1Fu-ZhZq_BHL5ghbSBBHJRpl47d4bTxqw2zv_F3uVNWkvb_ruiwjO6314C3FDfMPpzsUTcDh4F_fu1ZFwQlirvdyXULuUdZ0EsDTqZmPJ7bPP3-Nim0JqK8bgJoNMYyY_UsQKJ9e8f6dhZpoGqhVcwDepYW6Dg6iP20yCuH9pmeEnoID9NCDbx9YJPZkqllHGrHDNsJYwNxJy6Alox56pybWWb0QmjNt9SE-QgFwRBANt9DOOEfqdnE5m0U4eMj8vZ_BGDHhhYTL-8oYup5FtW1cQMnToowLihgiQCyVn-TdWF7ecDlNajtnGVcrJe41VI9hGD3JW1O9xa60ksZ07quaOcEchROwBIfRks3fO-bEN99ZwxQGydH-kh3KjONaOK0gYakkhgtBg9lve-cnKyxRyxDbQCq3e820mrZBKFsycxGiF3dXd88n1IolJQYrbLLG9hzKV2Kkj3zDcOXoFyx1-q4Yrg6JpM8Tcw3uH7rBDxWTkbgMQ4knsx5Ak8em6JjWuG4Dpr7A=w1052-h789-no",
            description: "Redcloud Peak summit looking toward Sunshine Peak",
          },
          {
            src: "https://lh3.googleusercontent.com/hzI0grKKWKvXaHur5M4DL_91ISblrKJptnTrlhpAqflLVF9aiYe3uGnQLpa93q2EQvbdLGz3apv8wzA2xSkoISxMV-kECq6YN2VfEKpDOsEo1Ag-96W9zdhsePZnlNtkApsw8Gr7LoQYvLecN737OpkietzN2nliXwoVVZSdvDhvLCF5KJ9j2_iaaWPg3B1Yl0MvETkxZwKVYGffClWgCJ4fbi2d5AwTLbuOkWftXjG39JJZyf_6JwlhwCL7lLa0rr0plaY9e6VtlWJl8h_pPTt4ag8uK3-0ynxd0uaT7PZ1p7zSpmBRk1JxAW6ZuzMmO6kTiquOHyRUndylE2eUnmUfDJoQBEb1NDMOVOTGQ4pTlyDsenHLcqwTESkN6DSm9-d7Uhs3crpuoxs9bFdZETbgIqkzwHO6o_WVwscGohw2ULd_BWka-q-QSW4f7RM0zd8WCTKjiPiBzaf4zWSmRMDwrPFEho6Ye3vGN82uBVmHqZOOjsKpOVLGkHU-5bE129352VxEEppUJaYpXJiGkqx4rw4dy9EixJgWyvLUEG_CNpMY1Tt4r8nARAdNSUKQzmdWAKxiKtLhH-F6nbkM3GjyJ2cMfU_JuHsRU6XWGfkcyXssOzVPLReodcYw1zxWn6btafSnTl2c_eXYLU2SIbJCpFLyi90=w1052-h789-no",
            description: "Redcloud looking on toward Sunshine Peak, different view",
          },
          {
            src: "https://lh3.googleusercontent.com/6Cbylq7Pc37O6KM0xRZY_2Fg530PvI0spayghWKW3ZrD3A8bxZKe9MxgAdN65oZ9Ort21niLihVr6SZokOpeT78pH04-QxHStr_BZJyZ981Aep-CwLU7c2CnRAM5v7ZJbfcG6UgLTrW2Jby993YLVFyCpcVBaYXd3ltik9cDxmZHEBydasxU-zV7EQv5wfIHZjk3cXSGpHxDj_hx_QRwaQyGKaPD1zYgXtsKdrNeIi6pPfSY6wnBTWm6v41Q9R2b14GpekrV-OGT69Vb6s8UJNCNHfufmI673EsEJ1R4kzW1bdIuJh6WaHzB-OJtM1fQ78K6lUn5p33krf6I3uMr4rPfJMcgW5duwn3qtK8Ocmd1kRWbBNWMzZTSFKqS_M8x7BhrIuLq6ean87pHS-WU40FdtzJxqLSP627nyXi__BMIL0d-jlpVP6Efzhqk4ft3cjUgW6hd9aMLdqKgPxNVtLkDw3q21n1IBBvGReD7e9NWee8R5mrGduDwteUcvff3kNJWef3cZXdBqXTELythAHUGghaCUE93c5YtUQoT6w5AVjpGXcp1pZALwCd27RkHVeCTYorFfDrHvJZxapZZc_Ak87CdgFYzlBLoRAWz0Qpn8Up1u9DS4QFIJ3K4YGm22kyZeaXjsvGfkzKxMjGMiNCgz7h_AbU=w1054-h789-no",
            description: "Summit Beers on Sunshine Peak",
          },
          {
            src: "https://lh3.googleusercontent.com/KX5pb9i2w9-11GcHO4L8XMUvzZ9W-y1t3Qpd1iBvYf4qnw89Qrpj4a3LM6hLxIHTBRGhHwDI0yhfkeFlda9WPeH5UbaDzht18OkBJMPTfRPrshfuUUtM-AX3But_kKS38yPTEgEqON5PbJt7exowFD2863fD84nVWQdtp_niXXsTcVgzOl6XUTP-IwNcizJBGDLX6IbDgZGYwOuuze5RI5EMQpOWrZj9noHblSvqaYRCibbobd-1J6SnrE_GML01SLziP66LxkFbs-5ZCBCb1lWSFta9FvLfnig79YUGNvOUtGwjiDNT0ZbB2GKUDXzxnuSf3gol4S6TZ8iNYrIHLbuNkL-PJP3IRL1jTm0MbpVieGAuFt6JrEvAbdrHqYi2kZNFymC1uFor-gQyiqr5jF_wKxnjTbv29RvZQHBBC-SZViKxQE5Ul1xhmx544_VPd0qRrddxQiIiPJ3zVWLdFnUrq9ox99Az-cm6DqevNELm8TdnFnSsGV5XIKpT6CBCohC4lYcgdZVRpeeH0zc7lvsmGpD1-M9LpWLXg00TntrjhLAT_J4Xz_yGYCP8e6qrCg7dgdnQozQT0KBVylyfsOOhfAHUD2vGuF0EIn_9EYTr9ArB2u-mNKcLu2KuFgnTVrQ43ICKi2wehsH3MCbLC5Lz-FdFcjM=w1052-h789-no",
            description: "Exposure on the saddle between the peaks, heading back towards Redcloud from Sunshine Peak",
          },
          {
            src: "https://lh3.googleusercontent.com/RVj0qa7RMqxQsf-X_KVBfKesg_fTHfEvp_GzZP2JBmT39EciCuvGYTW0PcFofnY8Bcp100pYB_7wh5AJhlOvh8DOqsKZlt4L8adce95mga2eINHGRfE8BrfxRK-BjPitMVPE_1rEezV8x6SBMMgroDdsi8S4GJgkHlJOVY_t5tvrSW3C1Xh0WLda7OgqWGnDhfJbSzzRMApPFrH1CrSzL-aVMox1_gLn80Ys7HIiKqRqN0rRfXJK01ROXoLTRdsCYTUOIp8RYXLUb8fluwGNC5sB-asWbClrDZrUMI95oMTnqdyREDjEBKhXT1ogrBSGFef7TYuLjTxmIomDVUCHDd1qnd1BhFekSVGfNfjYI3Rhzb_qgILYfkz1sF_gT3fhHLsdOMytO4v6jgEfZTWMSPoWUQX13bsZ6_NoLkz2AkUJJaHkQDqQt0qekYmZpZdN79xPPuHEJQOMyRMNZu3ngl-PxjpM6HRzldKUwfLJhG13p43rtuWEs3TbxMEm7tJYy8neSqiiU9Hpd_uJo7HPomJazmLbjtFj-EhjikDF2mJE5oEv2NADCRfImve788AHKa80-H4eIh7y0hyRNBq20qEEn9J6TVSQJ_aIhTiGdlh_7kc36JuJuR4o0odV7zfhTYpJKyA4OJOufZcv_1Qm1gBRWEAgL9g=w1052-h789-no",
            description: "Working back down the trail towards the trailhead",
          },
          {
            src: "https://lh3.googleusercontent.com/RVj0qa7RMqxQsf-X_KVBfKesg_fTHfEvp_GzZP2JBmT39EciCuvGYTW0PcFofnY8Bcp100pYB_7wh5AJhlOvh8DOqsKZlt4L8adce95mga2eINHGRfE8BrfxRK-BjPitMVPE_1rEezV8x6SBMMgroDdsi8S4GJgkHlJOVY_t5tvrSW3C1Xh0WLda7OgqWGnDhfJbSzzRMApPFrH1CrSzL-aVMox1_gLn80Ys7HIiKqRqN0rRfXJK01ROXoLTRdsCYTUOIp8RYXLUb8fluwGNC5sB-asWbClrDZrUMI95oMTnqdyREDjEBKhXT1ogrBSGFef7TYuLjTxmIomDVUCHDd1qnd1BhFekSVGfNfjYI3Rhzb_qgILYfkz1sF_gT3fhHLsdOMytO4v6jgEfZTWMSPoWUQX13bsZ6_NoLkz2AkUJJaHkQDqQt0qekYmZpZdN79xPPuHEJQOMyRMNZu3ngl-PxjpM6HRzldKUwfLJhG13p43rtuWEs3TbxMEm7tJYy8neSqiiU9Hpd_uJo7HPomJazmLbjtFj-EhjikDF2mJE5oEv2NADCRfImve788AHKa80-H4eIh7y0hyRNBq20qEEn9J6TVSQJ_aIhTiGdlh_7kc36JuJuR4o0odV7zfhTYpJKyA4OJOufZcv_1Qm1gBRWEAgL9g=w1052-h789-no",
            description: "Fresh water",
          },
          {
            src: "https://lh3.googleusercontent.com/fwn6CkNL1SoXNAkqZMYgIjFUikNWBitptnnPTpRHH6U1hzRiEI3WGJgq7mOt11imd8td1DyZF7K1lRDouf8WW0LjjSj_kVLmdooubvkGeHBlpBqVAKOSIljcvZwA4nILwNFvwf2waWdVXVAG5d_At3tPEtMqrVYMwwSg9BwNC3UwvtlQ1p9HTHISiiTg8FSILYixNR6_2hJmSnzzOsDg1NWS2_LN9usSEBuUXSMxG0sPjWlCbnC9rJziXOWvhlrNpT2ttkMn1o_OYZTUy4N4dUUtWOISV9mB6k4QTEgzY-CRJXYUXtwNxCVRQyNAeMXEfUU-UV8oFV1gNSU_hvBKDX3EfDaLW5xLr3LI0XSDKHZOQHuwh1dxg1fekKxqFfIyflAsH52I84bGCHrzyW-tdmdbP-nJ2npiblLkVJyLd0ijE4XS3_HfoTE6nNujqxmEsXcDyCl-lw9S0qxQxyvXQB3lAL_TXmOWEIKs7V-_L0dth2ZXSN0s88u68giP_PRLaPsFVEv97NRGIZevI66ka-tohIcUe0c6_RRTuIdXhVYZRTqJa0sagPqtlCKH8XF_mnTXlza_hJxX3XHHH0tzpl8yolTnlF4Vv_fiQZpXnrWxcPwHPlHTLTb9Vtn5eEG4qr3d9Hbc3IPjpe6GunYRhFJgU6eIP04=w1052-h789-no",
            description: "Waking up with the mountains",
          },
          {
            src: "https://lh3.googleusercontent.com/n_2efklohyprKVdXlcluIMek-c8pOilU1qeA7T7M5TY9eGUM5yprYFgEuK5WUigYU2soDTkVyoZHKA-2e97mveX8GWyVkLK9TrOGJ1JZ-5aCFP_fIfTjuBRbWlew4Q2z2q1wexy0INfgOE9jAvuDao5xsXMHVECBjM3prp3AFSQuyp46cZTtkcQUMX5M9BXGu1mEH1XxWC7tNcH6uO10UvYNQMQaLBRlVJA9xoIUIRapCQYHT6S1s4ryqY784D_jMtB7UBgYqGdutj9FSnS87y9tn9UuaBHfx5WyMohn7DEJ8bJPfGBSq5SV86HJeK_C8Eyx5X58PV7XDfoTNK8bvU79TgMrHYkej-xQ6DEul8YyUHGTdFFuPUafzxx4TdUG8kFA0briCpJn3UjBhP9VWeNgI8-eAoVmROl7Dlk7fXDanoBkSRUHnWadauZImqpMDGtm7JGCvvfFeDubSnN4CkSqt6upUyQ8ALiICitn5HzwMfT4uPQuzPbYPFkVviBcIP_09gC4HZ0ci9MhfAbg5Yw-8XZqxfyPF1AxWOEXl3L7WSOgXhNIyEzvRRUy4NzfOUstvdfX1qVS6FZPFq_C9_b3QrkRqIfqkRNhlOU3AbnUwuqMrE0zw69r1TRkKh7CgpK4w78HSAwCGzdWzY3j5q3gKdcbTUc=s789-no",
            description: "The Forest Moon of Endor",
          },
          {
            src: "https://lh3.googleusercontent.com/fOZtbbkj1Jn5umMuRGYpWe0siglGqBZOfjGtcfYTo3Eii_5vJYi_7BoxD9tg8zDap383T28tLW_MNJUlgxX4G-l_uQPUIK0PuwOUjF_epFGMBOnbzopPwO7m5Qzye1uFWaCx183HsEHdJp2tQKfV0QdmQvm6zbatM3E82UjB81i2n8QXVu4nHrG41L4zQgz4HOMkQP7kXqmc_186rc_TWUZjIIYl6P9Yf26FfOY8wEi1ZX8Le54TcR8D_lRo8DvOi4O1TRZuyEkz5e9CSQPWqs39zWDHt8waqc7rPw2sW9XKBLrtMIkRJ_tyu7RjXDl32cy7SVsZhztTyr-dbPyYtdYV8yEnKxQM3Dwd7mUgbqdxTbo8jqwBxmsDmLA6UNuSVidROMWCJkZpocWeyjkD2dIYGi12sHtzzbFelMq9ydTe7he93VeeyVvvzSy-dIF1wTlsgPVwHDLcZnKIfSFSQImoyN3zwYy9c1xTxaYWv20tUrlhTnUgSod17z5iCiL0SeUrVdl5Rgedxt9fp37IE3Z6jHD4Ptj2zkrjEHsKfx1x47g5FUkLNdNSlb2zbMxyP-JYlC33jt7wCBATb-9MOxoRl_yexP_rXRecFpRPselrJcTlpU1DaEGUmo5Ny_6V1d5e-lNlgp2QiSiIIdiPfMVmPjJ9gf0=w1394-h789-no",
            description: "Looking S.West heading up to Handies",
          },
          {
            src: "https://lh3.googleusercontent.com/JB8_nhpDKis8iJCBVpQvUtUD0ld4kDPr-1IbJjuj_nMKgGa9FtQqqK-rBASCz2PFIo3p3osTcjDPU2ojF-6zpiABHhvglSUr3aF9vdr4o1MBBDgx30qc3KQsnsOVVwBP6B0G4e0GdtYDu-N1T5k-WB5_bIq8oiTXemLw9LVJKyJPq5ln9dKumI6-58ibl8NCPx0YwknkwxhVpq9Hhm_w3IyiOH3jLSVhEQHXZ4LFlfDf_IU8_HfE4Qzv8KtxesU7UmrfABRdeY9LO3e-MqwecQnyORFMp2OiFV5zacZ0mnqmharP3xwvupdzqVtxvFFq-fz50Hpob2nspRotnYllxozNYfZ2Y0ehYl4urfbuB5cHoLRfTUErwHHNKOUEZU6R7xpyN9t4EoULjCWQ-mDmHNiKzgYtSHRm9R7bOvxW1kxh7V0j6tH9rNZ8j3vWQWEHj6XIvlstFt_BnXl_QmpfA1D90bMZuSSVXcqkPv4-Ah5oBrBgutiYwPegRtLZgoNcGMJF6ttE_q8aMN33n1U9908zzWsDd6e8qGyvT3Sqo8v6Erjopuh22Y9EnJaauxXBywbR2VVfwm0TuExHM3BuAzsrcJxVn_M3z7LlIBGaj2XP1k5wSuDNkn_ERVVXpXlwFFSjCNLF62Ij-oA6hFx53YJxwOK4fmg=w1052-h789-no",
            description: "Love summer snow",
          },
          {
            src: "https://lh3.googleusercontent.com/JB8_nhpDKis8iJCBVpQvUtUD0ld4kDPr-1IbJjuj_nMKgGa9FtQqqK-rBASCz2PFIo3p3osTcjDPU2ojF-6zpiABHhvglSUr3aF9vdr4o1MBBDgx30qc3KQsnsOVVwBP6B0G4e0GdtYDu-N1T5k-WB5_bIq8oiTXemLw9LVJKyJPq5ln9dKumI6-58ibl8NCPx0YwknkwxhVpq9Hhm_w3IyiOH3jLSVhEQHXZ4LFlfDf_IU8_HfE4Qzv8KtxesU7UmrfABRdeY9LO3e-MqwecQnyORFMp2OiFV5zacZ0mnqmharP3xwvupdzqVtxvFFq-fz50Hpob2nspRotnYllxozNYfZ2Y0ehYl4urfbuB5cHoLRfTUErwHHNKOUEZU6R7xpyN9t4EoULjCWQ-mDmHNiKzgYtSHRm9R7bOvxW1kxh7V0j6tH9rNZ8j3vWQWEHj6XIvlstFt_BnXl_QmpfA1D90bMZuSSVXcqkPv4-Ah5oBrBgutiYwPegRtLZgoNcGMJF6ttE_q8aMN33n1U9908zzWsDd6e8qGyvT3Sqo8v6Erjopuh22Y9EnJaauxXBywbR2VVfwm0TuExHM3BuAzsrcJxVn_M3z7LlIBGaj2XP1k5wSuDNkn_ERVVXpXlwFFSjCNLF62Ij-oA6hFx53YJxwOK4fmg=w1052-h789-no",
            description: "Working my way up",
          },
          {
            src: "https://lh3.googleusercontent.com/84uJzgO9chlGJqS4kqezPVAoTOwju2-RtxUNlCmwV8ehSYAPGrUA7-GXFiD0bMt4f17tddZ0egOyEPvXmek3FFUZG28s1iKaw_ZtaUYP-b1YgkMDrGcv-MT8-oYJgPgfIsZ17LY_FD2DudQKBunMUuPgypUOZOesrEHf9ayuJ4SI5ZCRdqpLVec3tJQl_AQegDybwj64KjVlGLPTU-mm_umvsOC0Vh8ry0xr6LdLChWDDfG_t77sS0z7XYdkgrTdorEUr8z2t-2WyWP-gpwS3xX3el1pIaQbh6jqHGLW1Cq_P1ctMIRcEaTaN7ZHE6ZDoP42Z8g1XmA1ctb0Qa18gYvTu83g8KDO8f5iD3NEQjIzgdBm9tzIZ_k6pmSlvAuzwK6W9q0S7ytmEHLPV2i70Cvrft8QaTCl5BL6DYBUriMUAFDezxxy7Kejbn6rv8-Z5Mzpu48dB12VI6LFF5pnTwSvxsy5zAaob4FjcgJ45d4kgpCj6cdgK1ihpmURJ4QDzMSBlla5FlsGXF1Jut_hWn58OinVhMMP7ty_OQSsynkts3obuRIDsALsMdhqJqGHsxKcja8lTQWNxR1kbzJsJReI5VaSHAj01VhR7tUVnGxEOtCQGJa4IgGD79rdioW8yFG3nFPXcyR5V2SvZcWvzYdjkhulbFo=w1052-h789-no",
            description: "Selfies at 13,500'",
          },
          {
            src: "https://lh3.googleusercontent.com/yVEAAzsWsyb8RnaqrCJ79Ogfh70764D-T68pvXuR465SEKGVdHi22D3RfNfEP4UGbHKpm14KCvPgoXPMsTZmcbP7An6s99BL_ynoNtVwtIH6scOC742t7j2DTvChyVkFFxWbTvTTTwyqBJdIXWHsUe-Ii46duxtUW36B47anHK424pls5IEcCbPW6WTeRFRRxDrYwAWytt4oSbtkQwmnoVALhFemren0tEkM2uSfS_C572-jMN7cnGg8a0DxKhtUe5FO3axNv66R7fFUN-n3BTx6cwwJ9zLiezUl8KTzb0_onQEjyvKTqHVhb3zaJkTz8wvv-fA8CJOl3taGCn-tT8cIndlsVBopaxAYrC9trHo6TEQ9mjhyvUQDQl6NMmW0jlv8qzEVdw4C8g9Dym8MoqsQkGQy5NF_U-DxqMIEI0sJBfyRH4LHlVruRufAZbXLDGYTMWuNJX-3EvhSuViOqzYqyqdYRUnyHmyylEXTxk4dFon6t8swKWeyl6UCFuHlmvEBa_XZpG5Nk6-dpZBM6JY8f6qsqKweCORZlwBJyFz-5i-LRRtoqzlkcEDkBOZP_SLeWdnrjQK_EGNy_rzWkqITHjiBgE-OG6ywQQAKO0hHMBKbmU64jDI4JUCIh7wPXJJ1G0-6KUoGg6-mEdhvFQTEc6LSXtI=w1052-h789-no",
            description: "Love travesing",
          },
          {
            src: "https://lh3.googleusercontent.com/SSppxFEnnxelMl9G3orkZchvI3FWgSduKzV2MS29hrnSNbizGV5mxlIBMJfZ9Hkc-sVpPYNLMcERr5cKHPk7OMjC3isFP7QHC0LSsrttLvwyGLZO_o--icHMMTneGCDNLG0QCnC4iDou3Vvg5EDv3Y-NaVI736fnkzB9iOU_WKe1fkLPPJaXy29RUE4_iqSd4KrKNyeYDuSj5ytT1jIMjBV4YfmWiarlIqgw9P8SfpgFDfJtU0UQWgjqQOW1MWUCtnuSzxt28ZDWbwJAtiDg9Wix6OcwslNUHFz4x1Qh5jSZO7SP6zsUyaxRuKsSlzEdYBXY5T-17V6rqL6ZSJIumQs-XpHlYU0cC27nVbmLP-RE-s4xsoQaO6U8DoHoWnRz-xKU1Dprc7Drt-6txfhT4bKQyay_pE7In_GpQQo4tgtIh4ynISQtlpF_EPDEcYdItsiOvcrUHhJIe4isaQLIcybFvl5lC-oQ1WZcWV3DAa13OYkEvYPSEAexSIwgekApvkCt2ZLDvFmhk4LC0HpjkVY9yQcjLRJoerAavekxTaZ352__klaXwqtB0cjqHWdoEtQzH22HlejQF563604jQdCokSdC3DLNPkrCbTZOWu5ONBDnQdVbYmLuGCOQyuGf73B1mRdzbX90Bt-_lbXX8Fr0u6SojdQ=s789-no",
            description: "Summit. Had a nice chat and tea with an older woman from Montrose, Co.",
          },
          {
            src: "https://lh3.googleusercontent.com/zA5ysEodQSG0JROBDwaVRXAVIQGAm5rxMUqEv-hsA47nf_j2PK8NVfVNTRD9WvNdHz9kEzeZlqm2N5UE5OF5RAHAKQilFITsXfiLDw2LkR2mZYnVBiwYin15MQIzNpnOaVsxNZGsfVOtb2KJNcWvP-HDIFJwGKo8M8nZ5woeC8Cf-nHbLgy5HzKYjiglkP2w78w40G-YXN6i5HPIbx5Bb1_U5iRJduTvm7PUNCwGROneleRm9hmiDJYEsuhMrsl0--mOhWLNJxAVfXyqNmFzad1o-e9ZJPVDkFbcm_NNSCKYLZToqtb2VliwIHAAJMGLEp0MeJvVo06RHhgM5UWr2Rn5VwvBj2sy7Jy3xh1fIs-aOm7VVhg-06IbBVGUWtCjpy-ODUPkxPN4yml3D60mGf0Qfps7Y6kOc7uBmX1BekNE_DV9obPRqBJ5dPHpLI32UOwnlzkjG5PASiNcVDPHaQIcDxf_pKZ0QY-MCzaaa7eI53CSsIob9JO8Sa0Qq4Vt_NiPvMx_4nt9j5dHzGrOGf03i1S7F_uFvz3QTo2eu8WJr7c3G87nM8MhV5WO02B4q86tGcUKFRbL-taHtDgKKQW8NSOrxQuDXn2iMMgngfdt4ebJjQLMyHVL8BOFdH1ew30She9uFmLVTwNFZTjshb4s4ivvrc0=w1052-h789-no",
            description: "Working my way back towards the trailhead",
          },
        ]
      },
    },
    {
      // Mount Belford/Oxford Traverse 2017
      trip: {
        cardTitle: "Belford/Oxford Traverse",
        meta: {
          mainImgSrc: "https://lh3.googleusercontent.com/NDx7P3Qn7N8kI2oSN9I5aho9cL9brVwZBtyKIxLIuQS5d3adaijQt2E7zbwu9pogkBOdU5RIa04eLcOs_YGPlPP-Qb_YwEqBW9WWiYw-sMIxybPtGSxTWmpSGulSPH2juoFlGrBk9VF4Iha6NLI2cEc-ZygTItO2z-VVGVjWabxvDtOoxcsIGu2lxHqfcxEuldvNnuQMluZivBA1g_c5UXDITki_dalktjQDRYP03HEEqtjpMi-xkwG9jHtn1Bcimxqmw5NICEgfkj54BNAHKO8pgRZX1-z_ro8cAdXCB1NRtv9wejznITzrqs8hrvoFIEEIPhuX5uPEyJtS7Vacmo5D1BuzR8XqkXGwNZmhs-KfZqYj7arvs5gO0oMA9ilQG-IYWM1aDXR284uVkoUf9uSlPf2Bdi0mLe-NRk5gpfoDHZqxkmtxtaubEGbF8OECizFRj-ZFDIXqgVhB8JluI4C0BrgV6NwCVYhh5ricKzmoKD_Kxjv-Md0wSgtlPA19kv7ZZQaQjjL9mZy7hGUnZUfI1oTrbCP824NpSoGr-Q5uqYDyBhm2v4koPcfdtnSpZhSgYry2-UultLHOT-so0f-i4ZWtTscms888r7VJfOe0Z7iiZ_WeCSCzeJ_R4H5NJqm5mTm7Tsm1KayPQmrcDF6tU1-1jbM=w1054-h789-no",
          cardLocationSrc: "https://www.14ers.com/route.php?route=oxfo2&peak=Mt.+Belford+and+Mt.+Oxford",
          cardLocation: "Mount Oxford from Belford",
          cardDate: "June 2017",
          cardSubTitle: "Elevation: 14,153",
          cardTagline: "Me and my best bud, Garrett, crushed 2 in a day.",
        },
        img: [
          {
            src: "https://lh3.googleusercontent.com/ueiE0FUcZBMjNJic-cRkECqwAIlpnwobiyXGay6TftBCKrkTGt0D9WG-6pXM5SCbjfXZND_weKNOWuaAyisJtN_kUNedXZ83l2KMJgL2mKTuNwRFnPf10hzCFt_pCf0xl4u855_KrFbfe-p6upbdZcYL5Lxx7cIaA2TzPodS8wBASQGwR17tzck5B9RmSDQqQkcFiiQfxHBHoNzYJT2rXjlDaYsRw_Q2UDnKwTzab1XgX7oEFXD6z6CC0dTidpVzd2AapwcEqjEG8OgkmyIjYLgvqDtTN8F8Sm9DjhkcgCDRGIBD20v74gEh1JqAsPjP1a7hCMPzshDLFoX_vh6r97cN2wzKgV-JCSTNk7845KpC--Px-Y5Glc0GLBADSk8FPsjP3dT9izyJ0EfStDGqqnvvSCVXPpTCXAkDmCk205_iQ4xhWQ2rGegcELY_t7y72dsJ0gAJGkuwFRBNij26QoAbXdr_4emMG7sCrElx3yzXZxqW9JapU-vUMemcbhigJp01_0LTkm3r1jVZuFvlHSNmDkoGnzijGxxwQQl_Eaqq-tNg_4e_QpIfEtXYpsZwlZ96ANw4g_-F2dFtfX8K2Xd5OviLpUp0X8ddhYEYMjwBUnBgTLjxmEU67uKD3oNN1SJtTlshQBAHOHzcIPDSVlI09iuvw_k=w1052-h789-no",
            description: "Starting out for Mount Belford",
          },
          {
            src: "https://lh3.googleusercontent.com/VAO65FZasVNzxjAvbY8Qslq-moHMRav1znBqTYgnk5PkJ3i0kEsPBVsTJyIhVZojHvhLSkfO_5kGYN2DKYQappkPBWvJQoutsxZBUiNkoQYWYkxxHKhQ_ibopj9VK8vN35jnHgOheC27zrFlgjlriYX6Cfzx24VJrozvtrqj2tCt-Et5DLC8B05wBoIlxbQNHfa9RPu_aGaSZkTdGP_vUS78mvPqUGpBSkw0xV7_OsUmlqsy2yWcl5RbgYe352Pq2vtonaOd2gzV16a8lNpqZU5iL1UxhAZqBnGpLV175tvZaTHDHzLpPndNobjx_IsdJQYKFFuG2Mrx4ZcuFDlNeYdyErIIfj-iqkk4mVfQtZ9gMG_ictmVz5RLbI2enn7FR_-gMGtx5SWOMS_O2H00YAdhzHrE4PH2mxaEKpyqqLCLgDEJSOPYvYJZ2UMY8kYZ3GP2bsKxpbIp2YOE2KTO9aSwLNqLvBZupQc0MRDNeoLVnD4BpGrAq74RNyufqn4rcThfaugYAw095s1UlxVi1_8MoqbN76AuKiIETzzUob9VdocdmxxS3fehRlDlUutNQ_2nDCEKR-7lqsPHjz4noM5KHrndq6Iv9by3Yt1D-GMrNUVo9ZRtIC4Itfunsdi3ZuHsNZMoMdgQQ-AJF4R0S-_W-wjKy94=w1052-h789-no",
            description: "Garrett dragging feet but in good spirits",
          },
          {
            src: "https://lh3.googleusercontent.com/YNPfcHEKBXDBg70sU4-Fgud5Qzehxkt-gHXLvygBOcBJCQZ8gst-vQJrOlnRV1GMLNtL7WyD_vHZt6f14VcGcXxkG8xxcZrsvI2r_Q0FXE1ADE__m5cp79MgurQ6kYnNsv5O-1THTSo_MfjbiuxPTa_8ngxHfZ-HV-uwUMqZ4CqELOW8RSek61Qt6Uw9edtZwTMoYDCGfniuQbOU30BrvQ5V8J5GE9lSOgGyg4cvDHAMYKu6GBv1pNPR2aByH6OiAHa9iAPDNnzBhjhG4oiISuF4FDTcaFkShGDnOfumYEvg5g6BXOuAnzbKdjgESkEGgOBx3Bnk0g8fBnJnvSyD1HMn0linllrWxN5DivezVHwTuS_kcEbJJ1Ir2dyfn_vNWmWjfZQ9rgUSuo1OkgfQS4HmzDosef9u9WiUlFUw0NxcOkgUfMtTJ2dNB565rlu63483Ai9PMzskjSBLa7nhbNGjE48uMAC5kMx-2IdqnvAPIdIwW0rOGl-ceCZ3toGTo9Q5FeWWE0lKrjMI6OlNBzdzJ6gTJeigH54-_E426oDvaczZhezMApB6hR7-7zDeKF0mTtqQVTtZeYFi8ZwgQCOpqOLY4GEaokS3a07aTKxi3gSau2Xs_MNqGDuvzLH-TNdAs2J0Wo0zBfWRgEmLpkIWYAqLv1Q=w1052-h789-no",
            description: "Summit of Mount Belford; half the work done, onto Oxford",
          },
          {
            src: "https://lh3.googleusercontent.com/9pol1g6O_37ZOv3hOgbsV3_KV2JRU7Y3HWgUIVnftECpRQTSxK7W5r3bU-Hv6aaAjXoL7fdFNRBZ0rJlQ4Eqmin1cJh0-8P2T7JUBTxP19ZQMJ1iv1T4ge3XMUkkuzVZwoyWtHUTmQpo7vVRiJNE-FxuUhVqcFEhvYF3MXQR7KN4g718CFdvRpN79KSjpS_zlzsQ8giYJoMtX6167Dqe9WU7MMvrtvcmdysjk46nuRM7LNxzFqU-Cqdi4DUYV4MjMPyh-4BK7Z7T1c7ZOmmaWnq0sJJrPtmtwOVprkVHZRXWb_o-tI96Er_AM8Wtz66LzGO05szDQkuNU809Ky0bUAzft0Rt-a0yCrMSkf3Dd-v2PKBDQiciMWmLW8zLe7iIRueDnc7AoJ59tYdRD_K4UzkF9ov26KyCeaYdC9Rf4erZlCF0303VsWV-QyHrvz04wkgA1-VBOItvE37mtZzGLK24WWWixfUPaYBp3Bzf3smeU-AVkGS38lZIloZPIcrZkQ8nlgksvRfqdiWTJQeyixnHy7dbRUD6eMxtiyp0zL72u0aHDrYGY1t-_Ky5ZJDGYyJWlBykJqsap_kNZu8AtdKvqHmXigafpOi4I0o7Vcq-DyvQsozPOw5hzmhR7oICX3rzuKkRo9e89O7__6CSGBIJ2uEFFAk=w1054-h789-no",
            description: "Traversing snowpack on the way to Oxford",
          },
          {
            src: "https://lh3.googleusercontent.com/1RoPUGlet6uLa1Z7QgojvIayJ3YgIDBFOiblkBvql05txQLBf4a9RXvo1NIO58g1wVQC4ud9vlr71O4OIiVz1MAhCzYlwmoM_gjrxdaxkdXkKX2ywM0Z4b-0YqgDN1K0M6imn7og0PHbeK5v74FBoeI_rZq2sD1oIBmvcrZfJnmXIjuHnNNblEpGIbtovNv4LDqw8IxsIuFx1ecEKB_67y2MLGOi48rxaP9gdUxl9SMiRJuRzMj8eUn55va9RqONnpT4zq2FqnNjpoafwxKfTi_O64DDuX56qVp5oZqLt3e_efs51zYh_NHsZsI1Khlr7MXTGWg5p0YbvE1G3izdGmunm85Pkt84v_luvWbgpvkS0lhcchY5BMWQ-Pr7-MB15hTNgoeknjHlEgX8UP3mWnlTwSvs5WFcU44Pu8UA8Flh1XpmiyPZPPohF0P0C8mJMentiwuq52ooCq-fE0MG3BYItwDzuLWQZs7Asm1Gvf3d1WbTBZfB0MTdoOR9carvr3Ir8nATzkq-stOxcBnNWDahcHWR2lDh6eP1yIYMHbYZynyXt7B8XeAeNdX4kgHBjQvMm4tg9AJVQo0whcAFLDJHu5JYVfvBQhk5NRugGm7kdQPUqxxY1EKt4uP19Gt_CXmNnVeis6ExTvaN6lIt4KO4_DNpsNU=w1083-h789-no",
            description: "Mount Oxford seen from Belford, working our way back",
          },
        ],
      },
    }
  ];
  return {
    travelData: function() {
      return travelData;
    }
  }
})
