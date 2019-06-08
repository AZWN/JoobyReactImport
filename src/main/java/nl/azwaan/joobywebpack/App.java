package nl.azwaan.joobywebpack;

import org.jooby.Jooby;
import org.jooby.Results;
import org.jooby.frontend.Npm;
import org.jooby.pebble.Pebble;

public class App extends Jooby {

    {
        use(new Pebble());

        on("dev", () -> use(new Npm("v8.6.0")));

        assets("/dist/**", "/dist/{0}");

        get("/", () -> Results.html("dist/index"));

    }

    public static void main(final String[] args) {
        run(App::new, args);
    }

}
