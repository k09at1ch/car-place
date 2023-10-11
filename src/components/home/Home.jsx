import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header>
        <h1 style={{textAlign:"center", fontFamily: "Montserrat", fontWeight:600, fontSize:"56px"}}>🚘Car Place</h1>
        <nav>
          <ul style={{display: "flex", gap: "16px",fontFamily: "Montserrat", marginBottom: '36px', justifyContent: "center"}}>
            <li>
              {' '}
              <Link to="/" style={{color:"#121417",fontFamily: "Montserrat", textDecoration:"none", fontSize:"42px"}}>Home</Link>
            </li>
            <li>
              <Link to="/aviable" style={{color:"#121417",fontFamily: "Montserrat", textDecoration:"none", fontSize:"42px"}}>Aviable cars</Link>
            </li>
            <li>
              <Link to="/favorite" style={{color:"#121417",fontFamily: "Montserrat", textDecoration:"none", fontSize:"42px"}}>Favorite</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2 style={{color:"#121417", textDecoration:"none",fontFamily: "Montserrat", fontSize:"36px", textAlign:"center"}}>About</h2>
          <p style={{fontFamily: "Montserrat",}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste alias
            enim voluptatibus voluptas voluptates, natus dolorum reprehenderit
            dicta veniam culpa animi magni, commodi ex! Sapiente officiis,
            dignissimos voluptatem quis velit porro blanditiis corrupti neque
            sed? Libero officiis nobis facere animi doloremque beatae natus quia
            blanditiis iusto nam adipisci voluptates tempore fugit alias quae
            quis, sint, voluptatum unde aliquam, obcaecati eos quam velit
            dolorum! Modi laboriosam perferendis, tenetur reprehenderit at dolor
            nisi facilis quaerat quasi, nesciunt repudiandae porro dignissimos
            ut rerum, itaque nulla accusantium eligendi ullam sint explicabo ab.
            Quae quidem, illo expedita repudiandae ipsa fuga fugit tempore
            blanditiis eum quos eveniet beatae accusantium veniam consequuntur
            commodi adipisci optio molestias! Assumenda ipsum molestiae sunt
            sapiente illum! Similique tenetur at voluptatum esse porro doloribus
            aut dolor nulla exercitationem vitae. Quae atque molestiae dolore
            nostrum iure unde, suscipit ipsam similique deleniti pariatur,
            doloribus veritatis repudiandae numquam. Dicta vitae saepe,
            distinctio dolore reiciendis corrupti praesentium, dolor molestias
            laboriosam illum quos et veniam ex animi labore recusandae quas
            aperiam hic qui expedita itaque accusantium. Impedit, veritatis
            alias vitae sequi saepe minus illo nihil cupiditate quidem. Hic
            necessitatibus fugit voluptas consectetur, cupiditate voluptatum
            dicta nemo cum quis, provident laboriosam architecto expedita amet
            natus, odio nihil odit assumenda ducimus illum voluptatem
            perspiciatis voluptate magnam. Cupiditate a dicta magni dolorum.
            Nisi voluptas cupiditate ad sint in debitis deserunt quam! Suscipit
            minima maiores dicta voluptatum placeat autem ea consectetur ipsa!
            Dolorum quisquam deserunt dolor sequi. Obcaecati iste ducimus
            ratione voluptatum quis dolorem quaerat amet quia laboriosam,
            aliquam nihil est aliquid corporis quisquam eos pariatur sit libero
            optio! Minima fugiat ipsa, animi voluptates odio ipsum debitis
            dignissimos quos accusamus eveniet consectetur eos tempore tempora
            placeat excepturi sequi vero magni? Ab, natus accusantium numquam
            soluta sunt repellat odit reprehenderit voluptatum in consequuntur
            vero rerum perspiciatis quibusdam eius voluptates nihil nobis
            mollitia.
          </p>
        </section>
      </main>
      <footer style={{display:"block", margin:"36px auto"}}>
        <section style={{textAlign:"center"}}>
          <h2 style={{fontFamily: "Montserrat", fontSize:"24px"}}>Contacts</h2>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              fontFamily: "Montserrat",
            }}
          >
            <li style={{fontFamily: "Montserrat",}}>mail@mail.com</li>
            <li style={{fontFamily: "Montserrat",}}>+0(000)0000000</li>
            <li style={{fontFamily: "Montserrat",}}>facebook: @carplace</li>
          </ul>
        </section>
      </footer>
    </div>
  );
}

export default Home;
