import React from 'react'
import avatar from '../images/avatar1.jpg'
import image from '../images/blog26.jpg'

const PostDetail = () => {
  return (
    <div>

      <div className='post_details'>
        <div className='post-details-container'>
        <div className='post-details-header'>
            <img src={avatar} alt="" />
            <div className='post-details-author'>
              <h5>By shalom wubu</h5>
              <small>just now</small>


            </div>

            <div className='post-detail-btn'>
              <button className='edit-btn'>edit</button>
              <button className='delete-btn'>delete</button>
            </div>

          </div>

        </div>

        <div className='post-details-content'>
            <h1>this is the title</h1>


        </div>
        <div className='post-details-image'>
          <img src={image} alt="" /><br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos illo minus, culpa earum ab tenetur molestias quod consequatur? Debitis deserunt laudantium ratione fuga nihil rerum temporibus, laborum, quo accusantium ea, quibusdam illum blanditiis error quae tenetur quia sit ut porro quod voluptas impedit doloribus enim iure? Amet rerum accusantium libero id nesciunt incidunt, corporis architecto at molestiae vitae accusamus inventore exercitationem aliquid iusto sequi error debitis. Nam voluptates aliquid inventore quibusdam ipsa, delectus officia sunt dolore porro placeat tempore officiis a cum reprehenderit autem quam enim architecto dolorem nisi ex laboriosam molestiae iusto impedit. Fugit in repellat exercitationem, id sunt veritatis voluptatem. Eos dignissimos incidunt explicabo corrupti totam praesentium voluptatem quae, suscipit quam dolorem fugit. Dolorem, alias eaque. Minus maiores totam molestias quod labore possimus tenetur atque, eos nemo quos pariatur praesentium architecto? Autem facere nobis assumenda molestias accusamus reprehenderit, vitae ratione, laborum eos magni voluptatem! Odio totam doloribus in facere modi quas fugiat eius dignissimos incidunt, rem aliquam expedita optio excepturi tempora sed quidem non delectus pariatur provident quod. Dolores quisquam consectetur, tenetur eaque facilis suscipit nihil in. Placeat quod omnis adipisci ab. Obcaecati cupiditate, aut, ducimus a nemo facere voluptatibus consequatur tempora tempore autem et necessitatibus molestias sit pariatur officia illo laudantium! Similique amet corporis consequatur nemo repellendus quo excepturi, dicta sint necessitatibus sunt ut eveniet, enim porro blanditiis voluptate, ipsa neque totam incidunt debitis ullam. Soluta voluptatibus reiciendis explicabo esse ullam tempora? Aliquid ipsam cum doloremque cumque voluptate nisi nesciunt sequi enim laudantium blanditiis, quod corrupti numquam vitae ratione optio quae dicta odit excepturi similique quibusdam nihil? Fugiat asperiores libero sint explicabo! Iusto et optio sed voluptas labore voluptates repellat neque, adipisci quaerat nihil deserunt mollitia dolorem, dignissimos ad ipsum veniam temporibus facilis porro dolor eum ea vel praesentium! Sequi omnis molestiae cum tenetur laboriosam fugiat quae?</p>
          
        </div>
        
</div>


      
    </div>
  )
}

export default PostDetail
