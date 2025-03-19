import{_ as e,c as s,b as n,o as a}from"./app-Ciqs_Xc9.js";const t={};function l(r,i){return a(),s("div",null,i[0]||(i[0]=[n(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>Nginx</span></a></h1><h2 id="intro" tabindex="-1"><a class="header-anchor" href="#intro"><span>Intro</span></a></h2><p>Nginx is a high performance HTTP and reverse proxy server and an IMAP / POP3 / SMTP proxy server. It features low memory, high concurrency, high stability, and Nginx’s friendly and flexible configuration.</p><h2 id="starting-stopping-and-reloading-configuration" tabindex="-1"><a class="header-anchor" href="#starting-stopping-and-reloading-configuration"><span>Starting, Stopping, and Reloading Configuration</span></a></h2><p>To start nginx, run the executable file. Once nginx is started, it can be controlled by invoking the executable with the <code>-s</code> parameter. Use the following syntax:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> signal</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Where signal may be one of the following:</p><ul><li>stop — fast shutdown</li><li>quit — graceful shutdown</li><li>reload — reloading the configuration file</li><li>reopen — reopening the log files</li></ul><h2 id="configuration-file-s-structure" tabindex="-1"><a class="header-anchor" href="#configuration-file-s-structure"><span>Configuration File’s Structure</span></a></h2><p>Nginx consists of modules which are controlled by directives specified in the configuration file. Directives are divided into simple directives and block directives. A simple directive consists of the name and parameters separated by spaces and ends with a semicolon (<code>;</code>). A block directive has the same structure as a simple directive, but instead of the semicolon it ends with a set of additional instructions surrounded by braces (<code>{</code> and <code>}</code>). If a block directive can have other directives inside braces, it is called a context (examples: <code>events</code>, <code>http</code>, <code>server</code>, and <code>location</code>).</p><p>Directives placed in the configuration file outside of any contexts are considered to be in the main context. The <code>events</code> and <code>http</code> directives reside in the <code>main</code> context, <code>server</code> in <code>http</code>, and <code>location</code> in <code>server</code>.</p><p>The rest of a line after the <code>#</code> sign is considered a comment.</p><h2 id="serving-static-content" tabindex="-1"><a class="header-anchor" href="#serving-static-content"><span>Serving Static Content</span></a></h2><p>An important web server task is serving out files (such as images or static HTML pages). You will implement an example where, depending on the request, files will be served from different local directories: <code>/data/www</code> (which may contain HTML files) and <code>/data/images</code> (containing images). This will require editing of the configuration file and setting up of a server block inside the http block with two location blocks.</p><p>First, create the <code>/data/www</code> directory and put an <code>index.html</code> file with any text content into it and create the <code>/data/images</code> directory and place some images in it.</p><p>Next, open the configuration file. The default configuration file already includes several examples of the server block, mostly commented out. For now comment out all such blocks and start a new server block:</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">http</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Generally, the configuration file may include several server blocks distinguished by ports on which they listen to and by server names. Once nginx decides which server processes a request, it tests the URI specified in the request’s header against the parameters of the location directives defined inside the server block.</p><p>Add the following location block to the server block:</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    root </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/data/www;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This location block specifies the “<code>/</code>” prefix compared with the URI from the request. For matching requests, the URI will be added to the path specified in the root directive, that is, to <code>/data/www</code>, to form the path to the requested file on the local file system. If there are several matching location blocks nginx selects the one with the longest prefix. The location block above provides the shortest prefix, of length one, and so only if all other location blocks fail to provide a match, this block will be used.</p><p>Next, add the second location block:</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /images/ {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    root </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/data;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It will be a match for requests starting with <code>/images/</code> (location <code>/</code> also matches such requests, but has shorter prefix).</p><p>The resulting configuration of the server block should look like this:</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        root </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/data/www;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /images/ {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        root </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/data;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is already a working configuration of a server that listens on the standard port <code>80</code> and is accessible on the local machine at <code>http://localhost/</code>. In response to requests with URIs starting with <code>/images/</code>, the server will send files from the <code>/data/images</code> directory. For example, in response to the <code>http://localhost/images/example.png</code> request nginx will send the <code>/data/images/example.png</code> file. If such file does not exist, nginx will send a response indicating the 404 error. Requests with URIs not starting with <code>/images/</code> will be mapped onto the <code>/data/www</code> directory. For example, in response to the <code>http://localhost/some/example.html</code> request nginx will send the <code>/data/www/some/example.html</code> file.</p><p>To apply the new configuration, start nginx if it is not yet started or send the <code>reload</code> signal to the nginx’s master process, by executing:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>In case something does not work as expected, you may try to find out the reason in <code>access.log</code> and <code>error.log</code> files in the directory <code>/usr/local/nginx/logs</code> or <code>/var/log/nginx</code>.</p><h2 id="setting-up-a-simple-proxy-server" tabindex="-1"><a class="header-anchor" href="#setting-up-a-simple-proxy-server"><span>Setting Up a Simple Proxy Server</span></a></h2><p>One of the frequent uses of nginx is setting it up as a proxy server, which means a server that receives requests, passes them to the proxied servers, retrieves responses from them, and sends them to the clients.</p><p>We will configure a basic proxy server, which serves requests of images with files from the local directory and sends all other requests to a proxied server. In this example, both servers will be defined on a single nginx instance.</p><p>First, define the proxied server by adding one more <code>server</code> block to the nginx’s configuration file with the following contents:</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    listen </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    root </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/data/up1;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will be a simple server that listens on the port <code>8080</code> (previously, the listen directive has not been specified since the standard port <code>80</code> was used) and maps all requests to the <code>/data/up1</code> directory on the local file system. Create this directory and put the <code>index.html</code> file into it. Note that the root directive is placed in the server context. Such root directive is used when the location block selected for serving a request does not include own root directive.</p><p>Next, use the server configuration from the previous section and modify it to make it a proxy server configuration. In the first location block, put the <code>proxy_pass</code> directive with the protocol, name and port of the proxied server specified in the parameter (in our case, it is <code>http://localhost:8080</code>):</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        proxy_pass </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">http://localhost:8080;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /images/ {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        root </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/data;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We will modify the second location block, which currently maps requests with the <code>/images/</code> prefix to the files under the <code>/data/images</code> directory, to make it match the requests of images with typical file extensions. The modified location block looks like this:</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ~ </span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">\\.(gif|jpg|png)$ </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    root </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/data/images;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The parameter is a regular expression matching all URIs ending with <code>.gif</code>, <code>.jpg</code>, or <code>.png</code>. A regular expression should be preceded with <code>~</code>. The corresponding requests will be mapped to the <code>/data/images</code> directory.</p><p>When nginx selects a <code>location</code> block to serve a request it first checks location directives that specify prefixes, remembering <code>location</code> with the longest prefix, and then checks regular expressions. If there is a match with a regular expression, nginx picks this <code>location</code> or, otherwise, it picks the one remembered earlier.</p><p>The resulting configuration of a proxy server will look like this:</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        proxy_pass </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">http://localhost:8080/;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ~ </span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">\\.(gif|jpg|png)$ </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        root </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/data/images;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This server will filter requests ending with <code>.gif</code>, <code>.jpg</code>, or <code>.png</code> and map them to the <code>/data/images</code> directory (by adding URI to the root directive’s parameter) and pass all other requests to the proxied server configured above.</p><p>To apply new configuration, send the reload signal to nginx as described in the previous sections.</p><p>There are many more directives that may be used to further configure a proxy connection.</p><h2 id="setting-up-fastcgi-proxying" tabindex="-1"><a class="header-anchor" href="#setting-up-fastcgi-proxying"><span>Setting Up FastCGI Proxying</span></a></h2><p>Nginx can be used to route requests to FastCGI servers which run applications built with various frameworks and programming languages such as PHP.</p><p>The most basic nginx configuration to work with a FastCGI server includes using the <code>fastcgi_pass</code> directive instead of the <code>proxy_pass</code> directive, and <code>fastcgi_param</code> directives to set parameters passed to a FastCGI server. Suppose the FastCGI server is accessible on <code>localhost:9000</code>. Taking the proxy configuration from the previous section as a basis, replace the <code>proxy_pass</code> directive with the fastcgi_pass directive and change the parameter to <code>localhost:9000</code>. In PHP, the <code>SCRIPT_FILENAME</code> parameter is used for determining the script name, and the <code>QUERY_STRING</code> parameter is used to pass request parameters. The resulting configuration would be:</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        fastcgi_pass </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> localhost:9000;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        fastcgi_param </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">SCRIPT_FILENAME $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">document_root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">fastcgi_script_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        fastcgi_param </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">QUERY_STRING    $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">query_string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ~ </span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">\\.(gif|jpg|png)$ </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        root </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/data/images;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will set up a server that will route all requests except for requests for static images to the proxied server operating on <code>localhost:9000</code> through the FastCGI protocol.</p><h2 id="official-docs" tabindex="-1"><a class="header-anchor" href="#official-docs"><span>Official Docs</span></a></h2><ul><li><a href="https://docs.nginx.com/nginx/admin-guide/" target="_blank" rel="noopener noreferrer">Navigate</a></li></ul>`,54)]))}const d=e(t,[["render",l],["__file","nginx.html.vue"]]),h=JSON.parse('{"path":"/en/software/nginx.html","title":"Nginx","lang":"en-US","frontmatter":{"icon":"nginx","description":"Nginx Intro Nginx is a high performance HTTP and reverse proxy server and an IMAP / POP3 / SMTP proxy server. It features low memory, high concurrency, high stability, and Nginx...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://www.songjun520.cn/software/nginx.html"}],["meta",{"property":"og:url","content":"https://www.songjun520.cn/en/software/nginx.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"Nginx"}],["meta",{"property":"og:description","content":"Nginx Intro Nginx is a high performance HTTP and reverse proxy server and an IMAP / POP3 / SMTP proxy server. It features low memory, high concurrency, high stability, and Nginx..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T10:17:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T10:17:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T10:17:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Song\\",\\"url\\":\\"https://www.songjun520.cn/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.songjun520.cn/en/atom.xml","title":"Mr.Song Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.songjun520.cn/en/feed.json","title":"Mr.Song JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.songjun520.cn/en/rss.xml","title":"Mr.Song RSS Feed"}]]},"headers":[{"level":2,"title":"Intro","slug":"intro","link":"#intro","children":[]},{"level":2,"title":"Starting, Stopping, and Reloading Configuration","slug":"starting-stopping-and-reloading-configuration","link":"#starting-stopping-and-reloading-configuration","children":[]},{"level":2,"title":"Configuration File’s Structure","slug":"configuration-file-s-structure","link":"#configuration-file-s-structure","children":[]},{"level":2,"title":"Serving Static Content","slug":"serving-static-content","link":"#serving-static-content","children":[]},{"level":2,"title":"Setting Up a Simple Proxy Server","slug":"setting-up-a-simple-proxy-server","link":"#setting-up-a-simple-proxy-server","children":[]},{"level":2,"title":"Setting Up FastCGI Proxying","slug":"setting-up-fastcgi-proxying","link":"#setting-up-fastcgi-proxying","children":[]},{"level":2,"title":"Official Docs","slug":"official-docs","link":"#official-docs","children":[]}],"git":{"createdTime":1730715475000,"updatedTime":1730715475000,"contributors":[{"name":"宋军","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":4.72,"words":1415},"filePathRelative":"en/software/nginx.md","localizedDate":"November 4, 2024","excerpt":"\\n<h2>Intro</h2>\\n<p>Nginx is a high performance HTTP and reverse proxy server and an IMAP / POP3 / SMTP proxy server. It features low memory, high concurrency, high stability, and Nginx’s friendly and flexible configuration.</p>\\n<h2>Starting, Stopping, and Reloading Configuration</h2>\\n<p>To start nginx, run the executable file. Once nginx is started, it can be controlled by invoking the executable with the <code>-s</code> parameter. Use the following syntax:</p>","autoDesc":true}');export{d as comp,h as data};
