// register//
CREATE PROCEDURE registration( @email VARCHAR(100) )
AS
  nocount ON
  IF NOT EXISTS
  (
         SELECT email
         FROM   users
         WHERE  email = @email)
  BEGIN
    INSERT INTO users VALUES
                (
                            @firstname,
                            @lastname,
                            @email,
                            @password
                )
    SELECT firstname,
           lastname,
           email
    FROM   users
    WHERE  email=@email
  END
  SET nocount OFF;
END
begin
END

// Login//

CREATE PROCEDURE Login (@email NVARCHAR(100))
AS
  BEGIN
      SET nocount ON

      IF EXISTS (SELECT email
                 FROM   users
                 WHERE  email = @email)
        SELECT firstname,
               lastname,
               email,
               password
        FROM   users
        WHERE  email = @email

      SET nocount OFF;
  END 