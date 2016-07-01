package com.tba;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

/**
 * Created by tbonavia on 29/06/2016.
 */
@Path("/hello")
public class HelloWorldResource {
    @GET
    @Produces("text/plain")
    public Response message(){
        return Response.ok("Salut ! Como te sientes camarade ?").build();
    }
}
