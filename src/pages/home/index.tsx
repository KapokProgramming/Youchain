import { NextPageWithLayout } from "@/utils/types";
import { useDefaultLayout } from "@/hooks/useLayout";
import { useSignInRedirect } from "@/hooks/useSignInRedirect";
import { useAuthStore } from "@/stores/auth";
import styled from "styled-components";
import { Text } from "@/components/lib/Text";
import { useState } from "react";
import { log } from "console";

const Button = styled.header`
  button {
    background: #000;
    color: #fff;
    padding: 0.3rem 1rem;
    border-radius: 10rem;
    cursor: pointer;
  }
`;

const HomePage: NextPageWithLayout = () => {
  const signedIn = useAuthStore((store) => store.signedIn);
  const accountId = useAuthStore((store) => store.accountId);
  const logOut = useAuthStore((store) => store.logOut);
  const { requestAuthentication } = useSignInRedirect();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSafeAreaActive, setSafeAreaActive] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Function to close dropdown
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleSafeArea = () => {
    setSafeAreaActive(!isSafeAreaActive);
    setDropdownOpen(false); // Close the dropdown when toggling
  };

  return (
    <>
      <div
        id="stage"
        className="-z-10 fixed m-4 top-0 rounded-3xl bottom-0 left-0 right-0 overflow-hidden System-background-secondary"
        style={{
          width: isSafeAreaActive ? "85%" : "98.2%",
          right: isSafeAreaActive ? "0" : "auto",
          left: isSafeAreaActive ? "auto" : "0",
          position: "absolute",
          transition: "width 0.5s ease", // Optional: Add transition effect
        }}
      >
        <div
          id="navigation"
          className=" m-4 z-40 fixed space-x-4 right-4 HStack"
        >
          {signedIn ? (
            <>
              <div onClick={toggleDropdown}>
                <div className="VStack rounded-3xl p-3 System-background-grey-5 Label hover: System-background-secondary">
                  <div className="HStack gap-2">
                    <img
                      src="#"
                      alt="profile"
                      className="w-6 h-6 rounded-full"
                    />
                    <p>{accountId}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 pt-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className="">
                    {" "}
                    {isDropdownOpen && (
                      <div className=" VStack mt-4">
                        <button
                          type="button"
                          // onClick={logOut}
                          className="Label HStack text-left rounded-2xl p-4 gap-2 hover:System-background-secondary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                          </svg>
                          Profile
                        </button>

                        <button
                          type="button"
                          // onClick={logOut}
                          className="Label HStack text-left rounded-2xl p-4 gap-2 hover:System-background-secondary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                            />
                          </svg>
                          Status
                        </button>
                        <div className="Herizontal-line"> </div>

                        <button
                          type="button"
                          // onClick={logOut}
                          className="Label HStack text-left rounded-2xl p-4 gap-2 hover:System-background-secondary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Recently watched
                        </button>
                        <div className="Herizontal-line"> </div>

                        <button
                          type="button"
                          onClick={logOut}
                          className="Label HStack text-left rounded-2xl p-4 gap-2 hover:System-background-secondary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          Setting
                        </button>

                        <div className="Herizontal-line"> </div>

                        <button
                          type="button"
                          onClick={logOut}
                          className="Label HStack text-left rounded-2xl p-4 gap-2 hover:System-background-secondary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                            />
                          </svg>
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => requestAuthentication()}
                className="z-50 Label Button System-background-grey-5"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => requestAuthentication(true)}
                className="z-50 Label Button System-background-grey-5"
              >
                Create Account
              </button>
            </>
          )}
        </div>

        {/* ========================== Conten ========================== */}

        <p className="Label z-50">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
          consectetur! Nemo, cupiditate nostrum dolorum repellat veritatis
          consequatur sequi fugiat quae, labore ratione, deserunt dolores
          incidunt natus dolore veniam rem? Autem consequuntur aliquid libero.
          Sunt, et? Id dolor itaque illo a! Rerum incidunt, delectus assumenda
          atque, mollitia dolore eos voluptas minima quae numquam, sequi vel
          modi? Eum odit dicta quibusdam, facilis ab aliquid repellat quas quae,
          iure non mollitia voluptates nam ea id perferendis enim fugiat
          laboriosam. Sapiente laudantium maxime ratione. Omnis veritatis labore
          ipsa libero beatae veniam tempore porro consectetur, sunt neque animi
          numquam, nam perferendis perspiciatis odio necessitatibus expedita
          vel, nihil cupiditate illum est accusamus distinctio alias ducimus.
          Quasi consequatur voluptate, provident velit ad nobis quod incidunt
          autem, reiciendis nemo illo fugit consequuntur maiores. Similique
          pariatur et porro! Iusto ab maiores et facilis, maxime cum!
          Exercitationem error voluptatem hic obcaecati accusamus minima
          possimus nobis at sed nulla debitis deleniti consequuntur perferendis
          velit soluta perspiciatis alias asperiores, beatae a ea neque sint?
          Quibusdam, illum enim magnam aliquid hic temporibus aliquam facere,
          fugit accusantium doloremque iusto quis fugiat quo maxime corrupti nam
          assumenda est. Magnam numquam culpa fuga nam eligendi, delectus aut
          quod, consequatur ipsum enim incidunt commodi tenetur omnis, in ab
          cupiditate perspiciatis accusamus? Voluptates deserunt omnis, minima
          doloremque atque unde nam sit voluptate assumenda cum beatae maxime,
          ea minus sapiente ipsam. Fugit maxime cum culpa. Iusto aut amet non.
          Dignissimos, soluta suscipit sapiente saepe quaerat iure consectetur
          consequatur, quasi iste voluptatum dolorem odio animi facilis
          praesentium molestias perferendis culpa enim amet, vel dolore. Commodi
          non nulla, repellendus pariatur, totam placeat atque saepe error, quia
          a doloribus ex iusto? Atque beatae dicta tenetur exercitationem,
          voluptatibus sequi asperiores quae eligendi itaque libero, tempora vel
          facilis harum iure consectetur porro. Iste, nemo sequi? Tempora totam
          architecto placeat ipsa provident nisi quia? In fugit ullam ex non,
          officia dolorem illo nesciunt quam porro aut, nemo doloribus illum?
          Aspernatur aperiam iusto rerum, odit praesentium reiciendis
          voluptatibus voluptas quae unde porro mollitia dolores, nisi
          inventore! In, unde nobis delectus saepe et nesciunt libero
          perspiciatis, quas itaque ullam modi perferendis blanditiis, ex illum
          odit voluptatem. Asperiores repellendus, consectetur id placeat
          pariatur accusantium non magni obcaecati. Adipisci praesentium
          molestias sequi autem dolor voluptatem pariatur at deleniti fuga
          provident, aliquam voluptatibus facilis dolore ut, iste aperiam
          ducimus nobis minima optio. Perspiciatis atque incidunt ipsa
          cupiditate esse voluptas tempore, odit, nulla inventore corporis, fuga
          illum molestias quod vitae mollitia dolore. Quae quo enim accusamus
          necessitatibus hic repellendus, et, maxime quis at consequatur quas
          tempora provident recusandae cupiditate, dolores ducimus velit
          officiis ipsam! Beatae itaque veniam ducimus accusamus accusantium!
          Debitis nisi dolore fugit ullam consequatur eum excepturi, cupiditate
          maxime omnis libero error fugiat, aliquam quo blanditiis sequi nobis
          odit nam quam magnam ratione! Voluptatum neque ipsa, animi delectus
          velit excepturi ipsam exercitationem, et eum repudiandae tenetur
          architecto vel, sequi porro! Modi expedita tempore iste sit quia
          dolore consectetur earum iure nam vel dignissimos suscipit ab labore
          fugiat magni fuga ducimus velit, repudiandae architecto dolorum ex
          nesciunt reprehenderit recusandae omnis. Debitis voluptate dolorem aut
          voluptas, ducimus exercitationem perferendis similique voluptatem
          delectus quam temporibus explicabo! Molestiae esse saepe laborum autem
          itaque magni, assumenda iusto, aliquid accusamus praesentium nobis
          enim? Nihil veritatis earum tenetur labore quae. Exercitationem
          cupiditate molestias, incidunt soluta labore iste, in nulla mollitia
          illum dignissimos sunt. Minima perferendis soluta vel consequuntur
          illo ut reiciendis dolores repudiandae? Excepturi delectus odio
          voluptatum expedita voluptate earum dolor? Voluptas beatae provident
          iste doloribus laborum fugiat quas ad! Impedit dignissimos ut illum
          non tenetur veritatis, quidem vitae optio delectus? Inventore soluta
          recusandae perferendis consequuntur. Quas, hic aliquid tempora a
          itaque, iusto quasi atque repellat sit sint dolores sed magnam est
          optio vitae quae nostrum doloremque iure expedita fuga nemo
          consectetur quis ea laborum. Error neque similique beatae
          reprehenderit, eius assumenda odit optio dolorem ullam unde iure
          ratione dicta corrupti, provident incidunt quam sequi soluta delectus
          sapiente officia non. Laudantium delectus quasi, nam corrupti aperiam
          magni qui fugit itaque, quidem doloribus omnis odio quod consequatur
          incidunt debitis soluta quis veritatis facere voluptatum voluptates ab
          ducimus magnam ex. Quam ea qui ex magni temporibus necessitatibus,
          obcaecati natus. Autem, quaerat. Enim voluptatem assumenda tempore?
          Eveniet adipisci unde mollitia. Odio tempore iusto distinctio ducimus
          ex, laboriosam cum impedit voluptates unde veniam! Esse doloribus
          debitis eius quod expedita, qui magni asperiores consequatur corporis
          iste cum odit ducimus voluptatibus adipisci quis laudantium, tempora
          ut, quisquam rerum dolore dolorum obcaecati ipsum veritatis iure.
          Commodi vel libero nostrum? Sapiente fugiat inventore quibusdam
          adipisci nihil pariatur fugit animi eos! In perferendis et sunt omnis
          atque magni, quaerat voluptatibus repellat eligendi pariatur ex esse
          vitae cupiditate necessitatibus possimus dicta praesentium dolore
          corrupti rerum sint nobis voluptate eos veniam! Nemo itaque
          praesentium dolorem cumque dolorum necessitatibus, quidem ab,
          excepturi autem natus magnam nisi hic vero laboriosam quia ex facere
          ut omnis neque architecto quod perspiciatis vitae. Omnis maiores
          laboriosam a totam labore architecto hic, natus voluptatem. Dolore
          autem maiores alias facere odio deleniti, et cupiditate iure,
          voluptatibus reprehenderit natus! Quo laborum totam, pariatur mollitia
          fuga, vitae facere suscipit voluptatum eum molestias eligendi. Veniam
          quasi repudiandae asperiores beatae distinctio eligendi, quaerat enim
          labore praesentium adipisci ducimus ab velit neque soluta accusantium
          quis ut. Aliquid molestiae debitis atque? Voluptatem, quisquam!
          Architecto illum laborum itaque fugit repudiandae magnam mollitia,
          dolore recusandae aut nobis optio, eum dolores consectetur deleniti
          ipsum hic voluptates odio enim debitis rerum adipisci animi. Eos
          quaerat sed rerum laboriosam blanditiis ipsa, culpa cum, provident
          pariatur officiis debitis ut nihil, sit deserunt dolores maiores esse
          facere tempora. Officia similique amet voluptatum doloremque eum vero
          tempora repellendus. Id dolore tempora eos laborum alias sapiente
          molestiae saepe quia ab dignissimos dolorem architecto, repellendus
          voluptates cupiditate nisi nemo eveniet aliquam minus. Dolorem facere
          excepturi maxime, voluptatibus labore molestias ut rerum itaque
          consectetur deleniti eos dignissimos repudiandae soluta. Quia numquam
          sunt iure omnis unde repellat vitae natus iste, laboriosam eaque culpa
          veniam, odit corporis? Ipsam vel adipisci delectus veniam voluptatibus
          facere, maxime maiores, non, vero quos nisi! Corporis quod cupiditate
          voluptates architecto, aut asperiores vel necessitatibus illo iste hic
          blanditiis sequi obcaecati dolor maiores explicabo optio nobis facilis
          error earum! Voluptate velit esse aspernatur asperiores autem! Id
          totam reprehenderit non ipsa soluta expedita necessitatibus doloribus
          eum praesentium, ullam quas vel dolorem eaque quibusdam voluptas
          magnam laudantium hic nostrum corporis et! Eos, recusandae. Explicabo
          magnam qui rerum pariatur quasi ut rem similique sequi totam quos
          voluptatibus est perspiciatis nulla, ipsum magni labore ex. Commodi,
          officia, nobis dicta odio molestias reprehenderit quaerat nisi
          quisquam deserunt ipsam, autem earum exercitationem eius sed natus
          perspiciatis blanditiis? Inventore consequuntur dolore quia, id nobis
          cum harum illum quisquam, corrupti iusto hic recusandae distinctio
          exercitationem repudiandae vero pariatur ratione reprehenderit? Rerum
          laborum non doloribus sequi ab laboriosam, velit nesciunt voluptatem
          perferendis sed ducimus accusantium possimus, nulla corporis
          repudiandae doloremque et necessitatibus animi iste itaque aut minus.
          Perspiciatis numquam sed earum tenetur dolorem ullam? Exercitationem
          itaque, corporis natus laudantium aperiam, nemo perferendis possimus
          culpa architecto molestiae impedit aliquam eum dolores commodi iusto
          rerum at quidem facilis distinctio qui ducimus voluptatibus
          cupiditate? Quae fuga, porro quaerat ipsa quis repellendus, veniam
          placeat error voluptate, quasi nulla eum! Quaerat ipsum unde
          praesentium, accusamus ipsam iste dolor numquam nisi dignissimos
          officiis, harum quis modi voluptates necessitatibus beatae corrupti!
          Aut labore enim a sapiente. Dignissimos odit a nemo ab molestiae
          deleniti asperiores id laborum beatae quod, quam veritatis alias quo
          adipisci ipsa veniam aut ut quaerat! Iusto quas beatae laudantium
          tempore a voluptatibus, tenetur, praesentium, dicta reprehenderit quae
          corporis blanditiis ducimus repudiandae? Sequi, expedita? Ex incidunt
          nesciunt quia optio error. Quibusdam tenetur porro, sunt doloremque
          sit ducimus accusamus! Maiores libero assumenda praesentium cumque
          minus eius dignissimos numquam sint natus sunt quibusdam, dicta
          aliquam aperiam illo cupiditate enim! Ut, culpa doloremque? Culpa
          deleniti eum nihil quo, pariatur iure corrupti non! Fuga rerum animi
          unde dolore cupiditate blanditiis molestias dolores ratione hic optio
          temporibus odio, quod at quibusdam eos molestiae, culpa possimus
          aliquam? Sed, dolor adipisci similique impedit non fuga repudiandae
          natus eaque laboriosam inventore laborum fugiat eligendi, quibusdam
          hic dolorem eveniet in maiores fugit, voluptatum recusandae deleniti
          nam deserunt! Veritatis iusto illum voluptatem, quia odit alias
          voluptatibus labore dolorem corrupti quod minus aperiam amet, officiis
          maiores, nobis obcaecati qui ipsam molestiae neque est sequi et.
          Accusamus voluptatem molestias ut cum officiis! Quidem necessitatibus,
          et repudiandae ratione expedita perferendis! Perferendis, ipsum.
          Beatae cumque officiis, magnam commodi, ducimus consequatur possimus
          repudiandae vitae ab in harum eius nesciunt iusto repellendus illo!
          Architecto repellendus labore, possimus magnam neque reprehenderit
          voluptatum eius dolores eaque perferendis non reiciendis voluptate a
          corrupti dolorem deleniti vel earum illum consequuntur magni ducimus
          ipsum iste? Enim eum impedit ducimus beatae sint nobis qui nostrum
          assumenda perspiciatis error. Libero voluptatem natus illum placeat
          consequuntur cumque quod quas nulla, nobis blanditiis maxime,
          perspiciatis, quia ab quis exercitationem fugit quidem. Maiores
          expedita cum reiciendis quisquam tempora sint aspernatur illo tempore
          numquam ipsum eos, deserunt minus velit, nihil iste. Laborum sunt
          rerum similique minima itaque pariatur laudantium libero, temporibus
          quas possimus voluptatibus dolore quidem. Nemo quo ut hic adipisci
          nulla, natus minima mollitia vel temporibus minus veritatis
          reiciendis? Magnam.
        </p>
      </div>

      <div
        id="safe-area"
        className="-z-20 fixed top-0 bottom-0 left-0 right-0 overflow-hidden bg-black"
        onClick={toggleSafeArea}
      >
        <div
          id="panel"
          className="VStack rounded-lg gap-1 p-4 m-4 w-1/5 top-0 bottom-0 left-0 right-0 absolute -z-10 System-background Label"
        >
          <button
            type="button"
            onClick={toggleSafeArea}
            className="w-14 h-14 Label HStack text-left rounded-xl p-4 gap-2 hover:System-background-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
              />
            </svg>
          </button>

          <a href="" 
            className="max-w-xs h-14 Label HStack text-left rounded-xl p-4 gap-2 hover:System-background-secondary"
            >
            Home
          </a>
          <a href="">Short</a>
          <a href="">Subscriptions</a>
        </div>
      </div>
    </>
  );
};

// HomePage.getLayout = useDefaultLayout;

export default HomePage;
