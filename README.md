## start

- connect mongoDB compass first
- yarn start
- click on terminal localhost http://localhost:3000

## mongodb server

- "mongodb+srv://tes:Kerjatest1234@cluster0.v3jfw.mongodb.net/test"
- use mongodb compass sign in: "mongodb+srv://tes:Kerjatest1234@cluster0.v3jfw.mongodb.net/test"


## Error if code on / active

- pages/index.js (19:32)

<!-- - {/* 
          <main>
              <div className={styles.container}>
                  {posts.length === 0 ? (
                      <h2>No added posts</h2>
                  ) : (
                      <ul>
                          {posts.map((post, i) => (
                              <PostCard post={post} key={i} />
                          ))}
                      </ul>
                  )}
              </div>
          </main> */} -->

- pages/index.js (37:52)

<!-- // export async function getServerSideProps(ctx) {
//   let dev = process.env.NODE_ENV !== 'production';
//   let { DEV_URL, PROD_URL } = process.env;

//   let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts`);
//   let data = await response.json();

//   return {
//       props: {
//           posts: data['message'],
//       },
//   };

  

// } -->

## before ik off notebook ist working

# crud202231march

## Thanks
