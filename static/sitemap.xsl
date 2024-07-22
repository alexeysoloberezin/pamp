<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:template match="/">
      <urlset>
        <xsl:for-each select="sitemap:urlset/sitemap:url">
          <url>
            <loc>
              <xsl:value-of select="sitemap:loc"/>
            </loc>
            <lastmod>
              <xsl:value-of select="sitemap:lastmod"/>
            </lastmod>
          </url>
        </xsl:for-each>
      </urlset>
  </xsl:template>
</xsl:stylesheet>
